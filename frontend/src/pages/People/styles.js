import styled from 'styled-components';

export const Content = styled.div`
  padding: 20px;
  height: 100%;

  button {
    margin: 10px;
  }

  table {
    thead {
      tr {
        text-align: center;
      }
    }
    tbody {
      td {
        text-align: center;
        padding-left: 10px;
      }
      td:last-child {
        text-align: end;
        width: 160px;
      }
    }
  }
`;
