import React from 'react';

import { FaHistory } from 'react-icons/fa';
import { Container, Badge } from './styles';

export default function LogHistory() {
  return (
    <Container>
      <Badge hasUnread>
        <FaHistory color="#34495e" size={24} />
      </Badge>
    </Container>
  );
}
