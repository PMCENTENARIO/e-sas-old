import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

import ModalShow from '../ModalShow';

import { signUpRequest } from '~/store/modules/user/actions';

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

export default function NewUser() {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const userId = 3;

  const handleSubmit = data => {
    dispatch(signUpRequest(data));
  };
  return (
    <Content>
      <h3>Novo utilizador do sistema</h3>
      <form onSubmit={handleSubmit}>
        <section>
          <div>
            <button type="button" onClick={() => setModalShow(true)}>
              Buscar Pessoa
            </button>

            <ModalShow
              data
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div>
            <span>Nome: Paulo Spiguel</span>
          </div>
        </section>
        {/* <div className="inputField"> */}
        {/* <div className="fieldset">
            <span>Dados Pessoais</span>
            <Row>
              <Col sm={4}>
                <ButtonToolbar>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Buscar Pessoa
                  </Button>
                  <ModalShow
                    data
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </ButtonToolbar>
              </Col>
              <Col sm={8}>
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
                </div>
              </Col>
            </Row>

            <div>
              <Input name="name" type="text" placeholder="Nome completo" />
              <Input name="phone" type="phone" placeholder="Telefone" />
              <Input name="document" type="text" placeholder="CPF" />
            </div>
          </div> */}
        <section>
          {/* <Row>
            <Col sm={4}>
              <ButtonToolbar>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Buscar Pessoa
                </Button>
                <ModalShow
                  data
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </ButtonToolbar>
              <span>Nome: </span>
            </Col>
            <Col sm={8}>
              <div className="photoLabel">
                <label htmlFor="avatar">Avatar</label>
                <Input
                  name="avatar"
                  type="file"
                  onChange={() => {
                    alert('ok');
                  }}
                  hidden
                />
              </div>
            </Col>
          </Row> */}
          <span className="title">Dados para acesso</span>
          <div>
            <label htmlFor="email">
              E-Mail <b>*</b>
            </label>
            <Input name="email" type="email" placeholder="E-mail válido" />
            <label htmlFor="password">
              Senha <b>*</b>
            </label>
            <Input name="password" type="password" placeholder="Nova senha" />
            <label htmlFor="passwordConfirm">
              Confirmar senha <b>*</b>
            </label>
            <Input
              name="passwordConfirm"
              type="password"
              placeholder="Repetir senha"
            />
            <label htmlFor="profile">
              Perfil do usuário <b>*</b>
            </label>
            <select name="profile">
              <option selected disabled>
                Selecionar
              </option>
              <option value="0">Cidadão</option>
              <option value="1">Operador</option>
              <option value="2">Administrador</option>
              {userId > 2 && <option value="3">Master</option>}
            </select>
          </div>
        </section>
        {/* </div> */}
        <button type="submit">Salvar</button>
      </form>
    </Content>
  );
}
