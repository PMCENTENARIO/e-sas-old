import * as Yup from 'yup';
import Task from '../models/Task';

class TasksController {
  async index(req, res) {
    if (req.userProfile < 2)
      return res.status(400).json({ error: 'User does not have permission' });

    const tasks = await Task.findAll();

    return res.json(tasks);
  }

  async store(req, res) {
    if (req.userProfile < 2)
      return res.status(400).json({ error: 'User does not have permission' });

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fail' });
    }

    const { title, description } = req.body;

    const task = await Task.findOrCreate({
      where: { title },
      defaults: { description },
    });

    return res.json(task);
  }

  async update(req, res) {
    if (req.userProfile < 2)
      return res.status(400).json({ error: 'User does not have permission' });

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fail' });
    }

    const { id } = req.params;
    const task = await Task.findByPk(id);

    const { title, description } = await task.update(req.body);

    return res.json({ id, title, description });
  }
}

export default new TasksController();
