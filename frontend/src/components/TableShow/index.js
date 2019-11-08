import React from 'react';
import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import { FaCheck, FaWindowClose, FaEdit } from 'react-icons/fa';

export const Content = styled.div`
  width: 100%;
`;

export default function TableShow(props) {
  return (
    <Content>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>{props.FirstColumn ? props.FirstColumn : 'Primeira Coluna'}</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
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
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@mdo</td>
            <button type="button">
              <FaCheck />
            </button>
            <button type="button">
              <FaEdit />
            </button>
            <button type="button">
              <FaWindowClose />
            </button>
          </tr>
        </tbody>
      </Table>
    </Content>
  );
}
