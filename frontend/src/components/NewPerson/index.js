import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/user/actions';

import { Content } from './styles';

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

export default function NewPerson() {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(signUpRequest(data));
  };
  return (
    <Content>
      <h3>Novo Pessoa</h3>
      <form onSubmit={handleSubmit}>
        <section>
          <div>
            <label htmlFor="name">
              Nome <b>*</b>
            </label>
            <Input
              name="name"
              type="text"
              placeholder="Digite o nome completo"
            />
            <label htmlFor="phone">
              Contato (Celular) <b>*</b>
            </label>
            <Input name="phone" type="tel" placeholder="Telefone com o DDD" />
            <label htmlFor="document">
              Número CPF <b>*</b>
            </label>
            <Input
              name="document"
              type="text"
              placeholder="Insira um CPF válido"
            />
          </div>
        </section>
        <button type="submit">Salvar</button>
      </form>
    </Content>
  );
}
