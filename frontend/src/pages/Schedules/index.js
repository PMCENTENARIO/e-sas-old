import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { FaCheck, FaWindowClose, FaEdit } from 'react-icons/fa';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import { Content } from './styles';

import Main from '~/components/Main';

export default function Users() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedules');

      setSchedules(response.data);
    }

    loadSchedule();
  }, []);

  const titles = [
    'Solicitante',
    'Contato',
    'Data solicitação',
    'Tipo',
    'Protocolo',
    '#',
  ];

  const handleContact = contact => {
    const partOne = contact.slice(0, 2);
    const PartTwo = contact.slice(2, 11);
    const textAdjusted = `(${partOne}) ${PartTwo}`;

    return textAdjusted;
  };

  const users = api.get('schedule');
  console.tron.log(users);

  const content = (
    <Content>
      <Link to="/newschedule">
        <Button>Novo agendamento</Button>
      </Link>

      <Table className="table" striped bordered hover size="sm">
        <thead>
          <tr>
            {titles.map(column => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {schedules.map(schedule => (
            <tr key={schedule.id}>
              <td>{schedule.person.name}</td>
              <td>{handleContact(schedule.person.phone)}</td>
              <td>
                {formatDistance(parseISO(schedule.date), new Date(), {
                  addSuffix: true,
                  locale: pt,
                })}
              </td>
              <td>{schedule.task.title}</td>
              <td>{schedule.protocol}</td>
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
