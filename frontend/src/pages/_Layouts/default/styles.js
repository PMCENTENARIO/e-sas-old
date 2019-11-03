import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  /*  height: 100%; */
  background: linear-gradient(90deg, #bdc3c7, #bdc3c7);

  select {
    height: 24px;
    color: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    height: 44px;
    background: #27ae60;
    color: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#27ae60')};
    }
  }
`;
