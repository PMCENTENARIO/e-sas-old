import User from '../models/User';
import Person from '../models/Person';

class CollaboratorController {
  async index(req, res) {
    const collaborators = await User.findAll({
      where: { profile: 1 },
      attributes: ['id', 'email', 'profile'],
      include: [
        {
          model: Person,
          as: 'person',
          attributes: ['name', 'phone', 'document'],
        },
      ],
    });
    return res.json(collaborators);
  }

  async store(req, res) {
    return res.json({ message: 'Collaborator' });
  }

  async update(req, res) {
    return res.json('ok');
  }

  async show(req, res) {
    return res.json('ok');
  }

  async delete(req, res) {
    return res.json('ok');
  }
}

export default new CollaboratorController();
