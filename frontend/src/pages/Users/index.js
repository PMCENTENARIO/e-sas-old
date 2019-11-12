import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { FaCheck, FaWindowClose, FaEdit } from 'react-icons/fa';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Content } from './styles';
import Main from '~/components/Main';

import api from '~/services/api';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');

      console.tron.log(response.data);

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  const titles = ['Nome', 'E-mail', 'Perfil', 'Data cadastro', '#'];

  const toogleProfile = profile => {
    switch (profile) {
      case 1:
        return 'Padrão';
      case 2:
        return 'Operador';
      case 3:
        return 'Administrador';
      case 4:
        return 'Master';
      default:
        return 'Cidadão';
    }
  };

  const content = (
    <Content>
      <Link to="/signup">
        <Button>Novo Usuário</Button>
      </Link>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {titles.map(column => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.person.name}</td>
              <td>{user.email}</td>
              <td>{toogleProfile(user.profile)}</td>
              <td>
                {formatDistance(parseISO(user.createdAt), new Date(), {
                  addSuffix: true,
                  locale: pt,
                })}
              </td>
              <td>
                <button type="button">
                  <FaCheck />
                </button>
                <button type="button">
                  <FaEdit />
                </button>
                <button type="button">
                  <FaWindowClose />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Content>
  );

  return <Main content={content} />;
}
