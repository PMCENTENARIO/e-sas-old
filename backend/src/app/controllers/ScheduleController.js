import * as Yup from 'yup';
import moment from 'moment-timezone';
import Address from '../models/Address';
import Schedule from '../models/Schedule';
import Person from '../models/Person';
import Task from '../models/Task';
import User from '../models/User';

import ScheduleMail from '../jobs/ScheduleMail';
import CanceledScheduleMail from '../jobs/CanceledScheduleMail';
import Queue from '../../lib/Queue';
import LogSystem from '../../lib/LogSystem';

class ScheduleController {
  async index(req, res) {
    if (req.userProfile < 1)
      return res.status(401).json({ error: 'User does not have permission' });

    const { page = 1 } = req.query;

    const schedule = await Schedule.finddAll({
      where: { apply: null, canceled_at: null },
      attributes: ['id', 'protocol', 'date', 'message'],
      order: ['date'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        { association: 'person', attributes: ['name', 'phone'] },
        { association: 'task', attributes: ['title'] },
        {
          association: 'address',
          attributes: ['zip_code', 'street', 'number', 'district'],
        },
        {
          association: 'user',
          attributes: ['email'],
          include: [
            {
              association: 'person',
              attributes: ['name'],
            },
          ],
        },
      ],
    });
    return res.json(schedule);
  }

  async store(req, res) {
    /*
    Check if profeile is user sistem
    */
    if (req.userProfile < 1)
      return res.status(401).json({ error: 'User does not have permission' });

    const { person_id } = req.headers;

    const {
      zip_code,
      street,
      number,
      district,
      task_id,
      date,
      message,
      collaborator,
    } = req.body;

    const schema = Yup.object().shape({
      zip_code: Yup.string(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      district: Yup.string().required(),
      date: Yup.date().required(),
      message: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fail' });
    }

    const [address] = await Address.findOrCreate({
      attributes: ['id'],
      where: { zip_code, street, number, district },
    });

    const protocol = `${process.env.ABBREV_NAME}${moment()
      .locale('pt-br')
      .tz(process.env.TIMEZONE)
      .format('YYMMDDHHmmss')}`;

    try {
      const { id } = await Schedule.create({
        protocol,
        person_id,
        task_id,
        user_id: req.userId,
        address_id: address.id,
        date,
        message,
      });

      const schedule = await Schedule.findByPk(id, {
        attributes: [
          'id',
          'protocol',
          'date',
          'message',
          'user_id',
          'createdAt',
        ],
        include: [
          {
            model: Person,
            as: 'person',
            attributes: ['name', 'phone'],
          },
          {
            model: Task,
            as: 'task',
            attributes: ['id', 'title'],
          },
          {
            model: User,
            as: 'user',
            attributes: ['id'],
            include: [
              {
                model: Person,
                as: 'person',
                attributes: ['name'],
              },
            ],
          },
        ],
      });

      /* Envio de email de notificação para aviso de criação de serviço */
      if (collaborator) {
        const collaboratorPerson = await User.findByPk(collaborator, {
          attributes: ['id', 'email'],
          include: [
            { model: Person, as: 'person', attributes: ['name', 'phone'] },
          ],
        });

        /* Sent queues */
        await Queue.add(ScheduleMail.key, {
          schedule,
          collaboratorPerson,
        });
      }

      /* Register log event MongoDB */
      const text = 'Houve um novo agendamento de serviços para';
      await LogSystem.scheduleLog(schedule, text);
      /* Fim registro */

      return res.json({
        schedule,
      });
    } catch (error) {
      return res.json(error);
    }
  }

  async update(req, res) {
    if (req.userProfile < 1)
      return res.status(401).json({ error: 'User does not have permission' });

    const { id } = req.params;
    const { bucket, message, apply } = req.body;

    const schedule = await Schedule.findByPk(id, {
      attributes: ['id', 'date', 'protocol', 'canceled_at'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'email'],
          include: [
            {
              model: Person,
              as: 'person',
              attributes: ['id', 'name'],
            },
          ],
        },
        {
          model: Person,
          as: 'person',
          attributes: ['id', 'name', 'phone'],
        },
        {
          model: Task,
          as: 'task',
          attributes: ['id', 'title'],
        },
      ],
    });

    const { user_id } = await schedule.update({
      bucket,
      apply: apply ? new Date() : null,
      message,
      user_id: req.userId,
    });

    /* Register log event MongoDB */
    const text = `Foi finalizado um agendamento em com protocolo: ${schedule.protocol}`;
    await LogSystem.scheduleLog(schedule, text);
    /* Fim registro */

    return res.json({ id, apply, message, user_id });
  }

  async delete(req, res) {
    if (req.userProfile < 1)
      return res.status(401).json({ error: 'User does not have permission' });

    const { id } = req.params;
    const { collaborator } = req.body;

    const schedule = await Schedule.findByPk(id, {
      attributes: ['id', 'date', 'protocol', 'canceled_at'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'email'],
          include: [
            {
              model: Person,
              as: 'person',
              attributes: ['id', 'name'],
            },
          ],
        },
        {
          model: Person,
          as: 'person',
          attributes: ['id', 'name', 'phone'],
        },
        {
          model: Task,
          as: 'task',
          attributes: ['id', 'title'],
        },
        {
          model: Address,
          as: 'address',
          attributes: ['id', 'street', 'number', 'district', 'zip_code'],
        },
      ],
    });

    schedule.canceled_at = new Date();
    schedule.save();

    /* Envio de email de notificação para aviso de criação de serviço */
    if (collaborator) {
      const collaboratorPerson = await User.findByPk(collaborator, {
        attributes: ['id', 'email'],
        include: [
          { model: Person, as: 'person', attributes: ['name', 'phone'] },
        ],
      });

      /* Sent queues */
      await Queue.add(CanceledScheduleMail.key, {
        schedule,
        collaboratorPerson,
      });
    }

    /* Register log event MongoDB */
    const text = `Foi cancelado um agendamento relizado em ${moment(
      schedule.date
    )
      .locale('pt-br')
      .format('LL')} para ${schedule.person.name} na ${moment()
      .locale('pt-br')
      .tz(process.env.TIMEZONE)
      .format('LLLL')}`;
    await LogSystem.scheduleLog(schedule, text);
    /* Fim registro */

    return res.json(schedule);
  }
}

export default new ScheduleController();
