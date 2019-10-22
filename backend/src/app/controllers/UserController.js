import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    // Validação de dados de entrada (lib YUP)
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .min(3),
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

    const data = req.body;

    const userExists = await User.findOne({ where: { email: data.email } });

    if (userExists) res.status(400).json({ error: 'User already exists.' });

    const { id, name, email, profile } = await User.create(data);

    return res.json({
      id,
      name,
      email,
      profile,
    });
  }

  async update(req, res) {
    // Validação de dados de entrada
    const schema = Yup.object().shape({
      name: Yup.string(),
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

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    // Verifica email se for auterado no frontend
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
