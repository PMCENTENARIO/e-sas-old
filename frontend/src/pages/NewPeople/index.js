import React from 'react';

import Main from '~/components/Main';
import NewPerson from '~/components/NewPerson';

export default function NewPeople() {
  return <Main content={<NewPerson />} />;
}
