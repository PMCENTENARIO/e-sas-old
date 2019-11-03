import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.aside`
  grid-area: a;
  background: #ecf0f1;
  min-width: 160px;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.div`
  height: 40px;
`;

const Menu = styled.nav`
  background: #ecf0f1;
  display: flex;
  flex-direction: column;
  justify-content: start;

  a {
    height: 30px;
    font-size: 16px;
    color: #7f8c8d;
    font-weight: bold;
    margin: 0 0 5px;
    padding: 5px;
    display: flex;
    align-items: center;

    &:hover {
      background: #7f8c8d;
      color: #fff;
      transition: 500ms;
    }
  }
`;

const BoxConf = styled.nav`
  margin-top: 100%;
`;

export default function Drawer() {
  const handleLink = e => {
    console.log(e);
  };

  return (
    <Container onMouseEnter={handleLink}>
      <Logo />
      <Menu>
        <Link to="/">Dashboard</Link>
        <Link to="/register">Usuários</Link>
        <Link to="/">Nova Tarefa</Link>
        <Link to="/">Pessoas</Link>
        <Link to="/">Agendamento</Link>
        <Link to="/">Relatórios</Link>
      </Menu>
      <BoxConf>
        <Link to="/">$</Link>
      </BoxConf>
    </Container>
  );
}
