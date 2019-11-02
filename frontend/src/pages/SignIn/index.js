import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import logo from '~/assets/logoSmart.svg';
import { Container, Footer, ErrorMessage } from './styles';
import Squeres from '~/components/Squares';

export default function SignIn() {
  const [validade, setValidate] = useState(false);
  const handleSchema = () => {
    setValidate(true);
    // const fields = [...document.querySelectorAll('form input')];
    // console.log(fields.value);

    setTimeout(() => setValidate(false), 5000);
  };

  const handleValidation = data => {
    console.tron.log(data);
    const main = document.querySelector('main');

    const fields = [...document.querySelectorAll('form input')];

    fields.forEach(field => {
      if (field.value === '') {
        main.classList.add('validate-error');
      }
    });

    const formError = document.querySelector('.validate-error');

    if (formError) {
      formError.addEventListener('animationend', event => {
        if (event.animationName === 'deBdAc') {
          formError.classList.remove('validate-error');
        }
      });

      handleSchema();
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

  return (
    <>
      <Container>
        <img src={logo} alt="Centenário do Sul" />
        <h1>S@S - GOV</h1>
        <p>LOGIN</p>
        <Form onSubmit={handleValidation}>
          <Input name="email" type="email" placeholder="Digite seu email" />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
          {validade && (
            <ErrorMessage>Campo e-mail ou senha estão incorretos</ErrorMessage>
          )}
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
