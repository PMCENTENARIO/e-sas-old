import * as Yup from 'yup';
import moment from 'moment-timezone';
import Address from '../models/Address';
import Schedule from '../models/Schedule';
import Log from '../schema/Log';
import Person from '../models/Person';
import Task from '../models/Task';
import Mail from '../../lib/Mail';

require('dotenv').config();

class ScheduleController {
  async index(req, res) {
    if (req.userProfile < 1)
      return res.status(401).json({ error: 'User does not have permission' });

    const { page = 1 } = req.query;

    const schedule = await Schedule.findAll({
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

    await Schedule.create({
      protocol,
      person_id,
      task_id,
      user_id: req.userId,
      address_id: address.id,
      date,
      message,
    })
      .then(async success => {
        const schedule = await Schedule.findByPk(success.id, {
          attributes: ['id', 'protocol', 'date', 'message'],
          include: [
            {
              model: Person,
              as: 'person',
              attributes: ['name', 'phone'],
            },
            {
              model: Task,
              as: 'task',
              attributes: ['title'],
            },
          ],
        });

        //   // /* Envio de email de notificação para aviso de criação de serviço */
        await Mail.sendMail({
          to: `Luiz Henrique <luizhenrique@centenariodosul.com>`,
          subject: `${process.env.APP_NAME} notificação: Agendamento de novo serviço`,
          template: 'schedule',
          context: {
            provider: 'Colaborador',
            protocol: schedule.protocol,
            date: moment(date)
              .locale('pt-br')
              .tz(process.env.TIMEZONE)
              .format('DD/MM/YYYY'),
            person: schedule.person.name,
            task: schedule.task.title,
            address: `${street}, ${number} - ${district} CEP: ${zip_code}`,
            message,
          },
        });

        //   /*
        // Register log event MongoDB
        // */

        await Log.create({
          content: `Foi criado um novo agendamento para ${
            schedule.person.name
          } na ${moment()
            .locale('pt-br')
            .tz(process.env.TIMEZONE)
            .format('LLLL')}`,
          user: req.userId,
          task: task_id,
        });

        return res.json(schedule);
      })
      .catch(error => {
        return res.json(error);
      });

    return res.json('OK');
  }

  async update(req, res) {
    if (req.userProfile < 1)
      return res.status(401).json({ error: 'User does not have permission' });

    const { id } = req.params;
    const { bucket, message, apply } = req.body;

    const schedule = await Schedule.findByPk(id);

    const { user_id } = await schedule.update({
      bucket,
      apply: apply ? new Date() : null,
      message,
      user_id: req.userId,
    });

    await Log.create({
      content: `Foi finalizado um agendamento em com protocolo: ${
        schedule.protocol
      } na ${moment()
        .locale('pt-br')
        .tz(process.env.TIMEZONE)
        .format('LLLL')}`,
      user: req.userId,
      task: schedule.task_id,
    });

    return res.json({ id, apply, message, user_id });
  }

  async delete(req, res) {
    if (req.userProfile < 1)
      return res.status(401).json({ error: 'User does not have permission' });

    const { id } = req.params;

    const schedule = await Schedule.findByPk(id);

    const { name } = await Person.findByPk(schedule.person_id);

    schedule.canceled_at = new Date();
    schedule.save();

    await Log.create({
      content: `Foi cancelado um agendamento relizado em ${moment(schedule.date)
        .locale('pt-br')
        .format('LL')} para ${name} na ${moment()
        .locale('pt-br')
        .tz(process.env.TIMEZONE)
        .format('LLLL')}`,
      user: req.userId,
      task: schedule.task_id,
    });

    return res.json();
  }
}

export default new ScheduleController();
