import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Table from '~/components/TableShow';

import { Content } from './styles';
import Main from '~/components/Main';

import api from '~/services/api';

export default function People() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function loadPeople() {
      const response = await api.get('people');

      setPeople(response.data);
    }
  });
  const content = (
    <Content>
      <Link to="/newpeople">
        <Button>Nova Pessoa</Button>
      </Link>
      <Table />
    </Content>
  );

  return <Main content={content} />;
}
