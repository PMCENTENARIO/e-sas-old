import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Content } from './styles';
import logoUser from '~/assets/user.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  phone: Yup.string()
    .required('Telefone é obrigatório')
    .min(11, 'Mínimo de 11 numeros'),
  document: Yup.string()
    .min(10, 'Insira um mínimo de 10 caracteres')
    .required(),
  email: Yup.string()
    .email()
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .required()
    .min(6, 'Senha deve conter no mínimo 6 caracteres'),
});

export default function RegisterUser() {
  const userId = 3;

  const handleSubmit = data => {
    console.log(data);
  };
  return (
    <Content>
      <h1>Novo utilizador do sistema</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="inputField">
          <div className="fieldset">
            <span>Dados Pessoais</span>
            <div>
              <div className="photoLabel">
                <label htmlFor="avatar">Selecionar avatar</label>
                <Input
                  name="avatar"
                  type="file"
                  onChange={() => {
                    alert('ok');
                  }}
                  hidden
                />
                <img src={logoUser} alt="photo" />
              </div>
              <Input name="name" type="text" placeholder="Nome completo" />
              <Input name="phone" type="phone" placeholder="Telefone" />
              <Input name="document" type="text" placeholder="CPF" />
            </div>
          </div>
          <div className="fieldset">
            <span>Dados para acesso</span>
            <div>
              <Input name="email" type="email" placeholder="E-mail válido" />
              <Input name="password" type="password" placeholder="Nova senha" />
              <Input
                name="passwordConfirm"
                type="password"
                placeholder="Repetir senha"
              />
              <select name="perfil">
                <option selected disabled>
                  Selecionar
                </option>
                <option value="0">Cidadão</option>
                <option value="1">Operador</option>
                <option value="2">Administrador</option>
                {userId > 2 && <option value="3">Master</option>}
              </select>
            </div>
          </div>
        </div>
        <button type="submit">Salvar</button>
      </Form>
    </Content>
  );
}
