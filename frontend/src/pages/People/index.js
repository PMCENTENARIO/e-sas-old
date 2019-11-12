import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { FaCheck, FaWindowClose, FaEdit } from 'react-icons/fa';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

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

    loadPeople();
  }, []);

  const titles = ['Nome', 'Contato', 'Data cadastro', '#'];

  const handleContact = contact => {
    const partOne = contact.slice(0, 2);
    const PartTwo = contact.slice(2, 11);
    const textAdjusted = `(${partOne}) ${PartTwo}`;

    return textAdjusted;
  };

  const content = (
    <Content>
      <Link to="/newpeople">
        <Button>Nova Pessoa</Button>
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
          {people.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{handleContact(person.phone)}</td>
              <td>
                {formatDistance(parseISO(person.createdAt), new Date(), {
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
