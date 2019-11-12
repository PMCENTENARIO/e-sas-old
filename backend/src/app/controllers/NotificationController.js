import Notification from '../schema/Notification';

class NotificationController {
  async index(req, res) {
    if (req.userProfile < process.env.LEVEL_DEFAULT)
      return res.status(401).json({ error: 'User does not have permission' });

    const notifications = await Notification.find()
      .sort({ createdAt: 'desc' })
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

  async update(req, res) {
    const { read, content } = req.body;
    const notification = await Notification.findById(req.params.id);

    if (typeof content === 'undefined') {
      notification.read = true;
    } else {
      notification.read = read;
      notification.content = content;
    }

    notification.new = true;
    await notification.save();

    return res.json(notification);
  }
}

export default new NotificationController();
