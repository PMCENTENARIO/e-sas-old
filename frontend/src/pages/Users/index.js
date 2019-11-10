import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Table from '~/components/TableShow';
import api from '~/services/api';

import { Content } from './styles';

import Main from '~/components/Main';

export default function Users() {
  const users = api.get('people');
  console.tron.log(users);

  const content = (
    <Content>
      <Link to="/signup">
        <Button>Novo Usuário</Button>
      </Link>
      <Table />
    </Content>
  );

  return <Main content={content} />;
}
