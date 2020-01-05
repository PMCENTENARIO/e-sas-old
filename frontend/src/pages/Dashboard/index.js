import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Wrapper } from './styles';
import Main from '~/components/Main';
import Cards from '~/components/Cards';
import ScreenWelcome from '~/components/ScreenWelcome';

const content = (
  <>
    <Cards />
    <br />
    <Row className="rowDown">
      <Col>
        <ScreenWelcome />
      </Col>
    </Row>
    <br />
  </>
);

export default function Dashboard() {
  return (
    <Wrapper>
      <Main content={content} />
    </Wrapper>
  );
}
