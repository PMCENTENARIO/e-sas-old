import * as Yup from 'yup';
import Person from '../models/Person';

class PersonController {
  async index(req, res) {
    if (req.userProfile < 2)
      return res.status(400).json({ error: 'User does not have permission' });

    const people = await Person.findAll();

    return res.json(people);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.String().required(),
      phone: Yup.String().required(),
      document: Yup.String().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fail' });
    }

    const { name, phone, document } = req.bory;
    const person = await Person.create({
      name,
      phone,
      document,
    });

    return res.json(person);
  }

  async update(req, res) {
    if (req.userProfile < 2)
      return res.status(400).json({ error: 'User does not have permission' });

    const { person_id } = req.query;

    const person = await Person.findByPk(person_id);

    const { id, name, phone, document } = await person.update(req.body);

    return res.json({
      id,
      name,
      phone,
      document,
    });
  }
}

export default new PersonController();
