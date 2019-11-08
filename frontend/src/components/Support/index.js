import React from 'react';

import { FaTeamspeak } from 'react-icons/fa';
import { Container, Badge } from './styles';

export default function Support() {
  return (
    <Container>
      <Badge hasUnread>
        <FaTeamspeak color="#34495e" size={24} />
      </Badge>
    </Container>
  );
}
