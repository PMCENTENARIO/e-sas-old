import React from 'react';
import PropTypes from 'prop-types';

import { Container, HeaderMain, Main } from './styles';

export default function Section(props) {
  const { main } = props;
  return (
    <Container>
      <HeaderMain />
      <Main>{main}</Main>
    </Container>
  );
}

Section.propTypes = {
  main: PropTypes.element.isRequired,
};
