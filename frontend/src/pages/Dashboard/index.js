import React from 'react';

import Header from '~/components/Header';
import Section from '~/components/Section';
import Drawer from '~/components/Drawer';
import Footer from '~/components/Footer';

import RegisterUser from '~/components/RegisterUser';

import { Wrapper } from './styles';

const main = (
  <div>
    <RegisterUser />
  </div>
);

export default function Dashboard() {
  return (
    <Wrapper>
      <Header />
      <Drawer />
      <Section main={main} />
      <Footer />
    </Wrapper>
  );
}
