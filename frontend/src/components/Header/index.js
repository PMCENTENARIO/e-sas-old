import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUsers,
  faAddressCard,
  faPaperPlane,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';

import Logo from '~/assets/logoSmart.svg';
import { Container, Content, Profile } from './styles';

import Notification from '../Notifications';
import Support from '../Support';
import HelpMe from '../HelpMe';
import LogHistory from '../LogHistory';

export default function Header() {
  const userId = 4;
  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="Logo" />
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="3x" className="faMenu" />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faPaperPlane} size="3x" className="faMenu" />
          </Link>
          <Link to="/users">
            <FontAwesomeIcon icon={faUsers} size="3x" className="faMenu" />
          </Link>
          <Link to="/">
            <FontAwesomeIcon
              icon={faAddressCard}
              size="3x"
              className="faMenu"
            />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faChartBar} size="3x" className="faMenu" />
          </Link>
        </nav>
        <aside>
          {userId > 3 && <LogHistory />}
          <Notification />
          <Support />
          <HelpMe />
          <Profile>
            <div>
              <strong>Paulo Spiguel</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Imagem do perfil"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
