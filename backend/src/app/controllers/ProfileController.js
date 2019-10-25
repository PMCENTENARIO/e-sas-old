import User from '../models/User';

class ProfileController {
  async index(req, res) {
    const userOperator = await User.findAll({
      where: { profile: 3 },
      attributes: ['id', 'person_id', 'email', 'avatar_id'],
    });
    return res.json(userOperator);
  }
}

export default new ProfileController();
