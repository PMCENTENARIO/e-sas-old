import React from 'react';
import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import { FaCheck, FaWindowClose, FaEdit } from 'react-icons/fa';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const Content = styled.div`
  width: 100%;
`;

export default function TableShow(props) {
  const { titles, data } = props;
  return (
    <Content>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {titles.map(column => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(obj => (
            <tr key={obj.id}>
              <td>{obj.name}</td>
              <td>{obj.phone}</td>
              <td>
                {formatDistance(parseISO(obj.createdAt), new Date(), {
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
}
