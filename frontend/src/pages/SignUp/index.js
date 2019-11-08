import React from 'react';

import Main from '~/components/Main';
import NewUser from '~/components/NewUser';

export default function SignUp() {
  return <Main content={<NewUser />} />;
}
