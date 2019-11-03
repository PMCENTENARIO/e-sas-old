import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: a;
  background: #ecf0f1;
  min-width: 160px;
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

export default function Drawer() {
  const handleLink = e => {
    console.log(e);
  };

  return (
    <Container onMouseEnter={handleLink}>
      <Link to="/">Dashboard</Link>
      <Link to="/register">Usuários</Link>
      <Link to="/">Nova Tarefa</Link>
      <Link to="/">Pessoas</Link>
      <Link to="/">Agendamento</Link>
      <Link to="/">Relatórios</Link>
    </Container>
  );
}
