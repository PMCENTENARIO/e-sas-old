import React from 'react';
import styled from 'styled-components';

export const Container = styled.footer`
  grid-area: f;
  background-color: #34495e;
`;

export default function Footer() {
  return <Container />;
}
