import moment from 'moment-timezone';
import Address from '../models/Address';
import Schedule from '../models/Schedule';

require('dotenv').config();

class ScheduleController {
  async index(req, res) {
    const schedule = await Schedule.findAll({
      where: { apply: false },
      attributes: ['id', 'protocol', 'message', 'apply', 'bucket', 'createdAt'],
      include: [
        { association: 'person' },
        { association: 'task' },
        { association: 'address' },
        { association: 'user' },
      ],
    });
    res.json(schedule);
  }

  async store(req, res) {
    const { person_id, task_id } = req.headers;
    const { zip_code, street, number, district, message } = req.body;

    const [address] = await Address.findOrCreate({
      attributes: ['id'],
      where: { zip_code, street, number, district },
    });

    try {
      const schedule = await Schedule.create({
        person_id,
        task_id,
        user_id: req.userId,
        address_id: address.id,
        message,
        protocol: `${process.env.ABBREV_NAME}${moment()
          .tz('America/Sao_Paulo')
          .format('YYMMDDHHmmss')}`,
      });

      return res.json(schedule);
    } catch (error) {
      return res.json(error);
    }
  }

  async update(req, res) {
    const { id } = req.params;

    if (req.userProfile < 1)
      return res.status(400).json({ error: 'User does not have permission' });

    const schedule = await Schedule.findByPk(id);

    const { apply, updatedAt, message, user_id } = await schedule.update({
      ...req.body,
      user_id: req.userId,
    });

    return res.json({ id, apply, updatedAt, message, user_id });
  }
}

export default new ScheduleController();
