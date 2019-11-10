import React from 'react';
import styled from 'styled-components';

import NavBar from '../Menu/NavBar';
import Section from '../Section';

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 114px);
`;

export default function Main(props) {
  return (
    <Container>
      <NavBar />
      <Section content={props.content} />
    </Container>
  );
}
