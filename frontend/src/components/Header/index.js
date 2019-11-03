import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  grid-area: h;
  background: rgba(39, 174, 96, 0.7);
  /*   background: linear-gradient(90deg, #c0392b, #fff, #27ae60);*/
`;

export default function Header() {
  return <Container />;
}
