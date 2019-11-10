import React from 'react';

import { FaQuestionCircle } from 'react-icons/fa';
import { Container, Badge } from './styles';

export default function HelpMe() {
  return (
    <Container>
      <Badge hasUnread>
        <FaQuestionCircle color="#34495e" size={24} />
      </Badge>
    </Container>
  );
}
