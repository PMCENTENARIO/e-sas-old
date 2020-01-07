import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import BarChart from '~/components/Chart/BarChart';
import PieChart from '~/components/Chart/PieChart';
import LineChart from '~/components/Chart/LineChart';
import RadarChart from '~/components/Chart/RadarChart';

import { Container } from './styles';

export default function Cards() {
  return (
    <Container>
      <CardGroup className="cardGroup">
        <Card bg="light" text="" style={{ width: '18rem' }}>
          <Card.Header>Relatório</Card.Header>
          <Card.Body>
            <BarChart />
          </Card.Body>
        </Card>

        <Card bg="light" text="" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <PieChart />
          </Card.Body>
        </Card>

        <Card bg="light" text="" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <LineChart />
          </Card.Body>
        </Card>

        <Card bg="light" text="" style={{ width: '18rem' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <RadarChart />
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}
