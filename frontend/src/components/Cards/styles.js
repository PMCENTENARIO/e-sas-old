import styled from 'styled-components';

export const Container = styled.div`
  .cardGroup {
    div:nth-child(-n + 4) {
      margin: 5px;
      min-width: 300px;
      div:nth-child(n) {
        margin: 0;
      }
    }
  }
`;
