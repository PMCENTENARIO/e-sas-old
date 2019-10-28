import Log from '../schema/Log';

class LogController {
  async index(req, res) {
    if (req.userProfile < 3)
      return res.status(401).json({ error: 'User does not have permission' });

    const logs = await Log.find()
      .sort({ createAt: 'desc' })
      .limit(20);
    return res.json(logs);
  }
}

export default new LogController();
