import React from 'react';
import { Row, Col, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Wrapper } from './styles';
import Main from '~/components/Main';
import Cards from '~/components/Cards/Card';
import CardFeature from '~/components/Cards/CardFeature';
import ScreenWelcome from '~/components/ScreenWelcome';
import Heatmap from '~/components/Maps/HeatMap';

const content = (
  <>
    <Navbar bg="light justify-content-between">
      <Navbar.Brand href="/">E-SAS.IO</Navbar.Brand>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Digite algo..."
          className=" mr-sm-2"
        />
        <Button type="submit">Perquisar</Button>
      </Form>
    </Navbar>
    <br />
    <Cards />
    <br />
    <CardFeature />
    <br />
    <Row className="rowDown">
      <Col>
        <ScreenWelcome />
      </Col>
      <Col>
        <Heatmap />
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
