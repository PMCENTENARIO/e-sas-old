import { Op } from 'sequelize';
import User from '../models/User';
import Person from '../models/Person';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      [Op.gte]: 1,
      attributes: ['id', 'email'],
      include: [
        {
          model: Person,
          as: 'person',
          attributes: ['id', 'name', 'phone'],
        },
        {
          model: File,
          as: 'avatar',
          attributes: ['url', 'path'],
        },
      ],
    });
    return res.json(providers);
  }
}

export default new ProviderController();
