import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import logo from '~/assets/logoSmart.svg';
import { Container, Footer /* ErrorMessage */ } from './styles';
import Squeres from '~/components/Squares';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }) => {
    const main = document.querySelector('main');

    if (!email || !password) {
      main.classList.add('validate-error');
    }

    const formError = document.querySelector('.validate-error');

    if (formError) {
      formError.addEventListener('animationend', event => {
        if (event.animationName === 'deBdAc') {
          formError.classList.remove('validate-error');
        }
      });
      toast.error('Campo e-mail ou senha estão incorretos');
    } else {
      dispatch(signInRequest(email, password));
      main.classList.add('main-hide');
    }

    main.addEventListener('animationstart', event => {
      if (event.animationName === 'AOCzg') {
        document.querySelector('body').style.overflow = 'hidden';
      }
    });

    main.addEventListener('animationend', event => {
      if (event.animationName === 'AOCzg') {
        main.style.display = 'none';
        document.querySelector('body').style.overflow = 'hidden';
      }
    });
  };

  return (
    <>
      <Container>
        <img src={logo} alt="Centenário do Sul" />
        <h1>S@S - GOV</h1>
        <p>LOGIN</p>
        <Form onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Digite seu email" />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
          {/* {validade && (
            <ErrorMessage>Campo e-mail ou senha estão incorretos</ErrorMessage>
          )} */}
          <button type="submit">Acessar</button>
        </Form>
        <Footer>
          <strong>PR Spiguel Tecnologia</strong>
          <strong>v1.0</strong>
        </Footer>
      </Container>
      {/* <Link to="/register">Cadastre-se para acessar</Link> */}
      <Squeres />
    </>
  );
}
