import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { LoopCircleLoading } from 'react-loadingg/';
import logo from '~/assets/logoSmart.svg';
import { Container, Footer /* ErrorMessage */ } from './styles';
import Squeres from '~/components/Squares';
import { signInRequest } from '~/store/modules/auth/actions';
import { store } from '~/store';

require('dotenv').config();

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const signed = useSelector(state => state.auth.signed);
  const [loadSpinner, setLoadSpinner] = React.useState(false);
  const hadleValidate = () => {
    const main = document.querySelector('main');

    if (!signed) {
      main.classList.add('validate-error');
    }

    const formError = document.querySelector('.validate-error');

    if (formError) {
      formError.addEventListener('animationend', event => {
        if (event.animationName === 'deBdAc') {
          formError.classList.remove('validate-error');
        }
      });
    } else {
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

  const handleSubmit = ({ email, password }) => {
    setLoadSpinner(true);
    setTimeout(() => {
      dispatch(signInRequest(email, password));
      hadleValidate();
      setLoadSpinner(false);
    }, 2000);
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
          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        </Form>
        {loadSpinner && <LoopCircleLoading />}
        <Footer>
          <strong>PR Spiguel Tecnologia</strong>
          <strong>{`v.${process.env.APP_VERSION}`}</strong>
        </Footer>
      </Container>
      {/* <Link to="/register">Cadastre-se para acessar</Link> */}
      {/* <Squeres /> Erro ocurred in login */}
    </>
  );
}
