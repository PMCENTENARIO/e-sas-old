import Person from '../models/Person';

class PersonController {
  async index(req, res) {
    const persons = await Person.findAll();

    return res.json(persons);
  }

  async store(req, res) {
    const { name, phone, document } = req.body;

    const person = await Person.create({
      name,
      phone,
      document,
    });

    return res.json(person);
  }
}

export default new PersonController();
