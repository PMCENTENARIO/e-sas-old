import Notification from '../schema/Notification';

class NotificationController {
  async index(req, res) {
    if (req.userProfile < process.env.LEVEL_DEFAULT)
      return res.status(401).json({ error: 'User does not have permission' });

    const notifications = await Notification.find()
      .sort({ createAt: 'desc' })
      .limit(20);
    return res.json(notifications);
  }

  async store(req, res) {
    if (req.userProfile < process.env.LEVEL_MASTER)
      return res.status(401).json({ error: 'User does not have permission' });

    const { content } = req.body;

    const notification = await Notification.create({ content });
    return res.json(notification);
  }
}

export default new NotificationController();
