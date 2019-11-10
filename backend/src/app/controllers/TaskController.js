import * as Yup from 'yup';
import Task from '../models/Task';
import User from '../models/User';
import Person from '../models/Person';
import LogSystem from '../../lib/LogSystem';

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

    /* Register log event MongoDB */
    const text = 'Houve uma criação de nova tarefa';
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
    await LogSystem.processLog(title, text, user.person.name);
    /* Fim registro */

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

    /* Register log event MongoDB */
    const text = 'Houve uma alteração de uma tarefa';
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
    await LogSystem.processLog(title, text, user.person.name);
    /* Fim registro */

    return res.json({ id, title, description });
  }
}

export default new TasksController();
