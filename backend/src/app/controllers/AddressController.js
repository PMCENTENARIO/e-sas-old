import Address from '../models/Address';
import User from '../models/User';
import Person from '../models/Person';
import LogSystem from '../../lib/LogSystem';

class AddressController {
  async index(req, res) {
    if (req.userProfile < 1)
      return res.status(401).json({ error: 'User does not have permission' });

    const { page } = req.query;

    const address = await Address.findAll({
      attributes: ['id', 'zip_code', 'street', 'number', 'district'],
      order: ['street'],
      limit: 20,
      offset: (page - 1) * 20,
    });
    return res.json(address);
  }

  async update(req, res) {
    if (req.userProfile < 2)
      return res.status(401).json({ error: 'User does not have permission' });

    const { id } = req.params;

    const address = await Address.findByPk(id);

    const { street, number, disrict, zip_code } = await address.update(
      req.body
    );

    /* Register log event MongoDB */
    const task = 'Alteração de endereço';
    const text = 'Houve uma alteração de endereção ';
    const user = await User.findByPk(req.userId, {
      attributes: ['id'],
      include: [
        {
          model: Person,
          as: 'person',
          attributes: ['id', 'name'],
        },
      ],
    });
    await LogSystem.processLog(task, text, user.person.name);
    /* Fim registro */

    return res.json(street, number, disrict, zip_code);
  }
}

export default new AddressController();
