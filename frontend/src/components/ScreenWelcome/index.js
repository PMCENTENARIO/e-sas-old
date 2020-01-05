import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

import ModalCalled from '~/components/Modals/ModalCalled';

const DefaultBox = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    border-radius: 4px;
  }
`;

const styles = {
  color: '#f39c12',
};

const menuWelcome = [
  { href: '/', title: 'Alterando o tema de seu Painel administrativo' },
  { href: '/', title: 'Realizar lançamento de Tickets' },
  { href: '/', title: 'Realizar cadastros de Usuários' },
  { href: '/', title: 'Realizar Análise dos Dados' },
];

export default function ScreenWelcome() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <DefaultBox>
      <div>
        <h3>Bem Vindo ao Seu Painel de Controle!</h3>
        <p>
          Aqui você poderá administrar realizar todos as operações necessárias,
          separamos algumas tarefas que pode realizarcom o sistema:
        </p>
      </div>
      <ul className="helpHoots">
        {menuWelcome.map(menu => (
          <li key={menu.title}>
            <a href={menu.href} title="">
              <FaChevronRight color={styles.color} />
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
      <p>
        Tens alguma dúvida ou questão? Abra um chamado pela{' '}
        <button type="button" onClick={() => setModalShow(true)}>
          Central de Ajuda.
        </button>
      </p>
      <ModalCalled show={modalShow} onHide={() => setModalShow(false)} />
    </DefaultBox>
  );
}
