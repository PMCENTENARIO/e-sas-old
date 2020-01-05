import React from 'react';
import PropTypes from 'prop-types';

import { Container, HeaderMain, Main } from './styles';

export default function Section(props) {
  const { content } = props;
  return (
    <Container>
      <HeaderMain />
      <Main>{content}</Main>
    </Container>
  );
}

/* Section.propTypes = {
  content: PropTypes.element.isRequired,
};
 */
