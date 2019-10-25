import * as Yup from 'yup';
import User from '../models/User';
import Person from '../models/Person';

class UserController {
  async index(req, res) {
    // Verifica perfil usuário
    if (req.userProfile < 2)
      return res.status(400).json({ error: 'User does not have permission' });

    const users = await User.findAll({ include: { association: 'person' } });
    return res.json(users);
  }

  async store(req, res) {
    if (req.userProfile < 2)
      return res.status(400).json({ error: 'User does not have permission' });

    // Validação de dados de entrada (lib YUP)
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fail' });
    }

    const { person_id } = req.params;
    const { email, password, profile } = req.body;

    const person = await Person.findByPk(person_id);

    // Caso não exista na tabela pessoas add
    if (!person) return res.status(400).json({ error: 'Person not found' });

    const userExists = await User.findOne({ where: { email } });

    if (userExists) res.status(400).json({ error: 'User already exists.' });

    const { id } = await User.create({
      person_id,
      email,
      password,
      profile,
    });

    return res.json({
      id,
      person_id,
      email,
      profile,
    });
  }

  async update(req, res) {
    // Verifica perfil usuário
    if (req.userProfile < 2)
      return res.status(400).json({ error: 'User does not have permission' });

    // Validação de dados de entrada
    const schema = Yup.object().shape({
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassowrd', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fail' });
    }

    const { user_id } = req.query;

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(user_id);

    // Verifica email
    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) res.status(400).json({ error: 'User already exists.' });
    }

    // Verifica se foi preenchido a senha e compara a senhas senhas
    if (oldPassword && !(await user.checkPassword(oldPassword)))
      res.status(401).json({ error: 'Password does not match' });

    const { id, name, profile } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      profile,
    });
  }
}

export default new UserController();
