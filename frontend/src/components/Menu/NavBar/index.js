import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  FaWindows,
  FaBuromobelexperte,
  FaUsers,
  FaIdCard,
  FaCalendarPlus,
  FaChartPie,
  FaRegCommentDots,
  FaSignOutAlt,
  FaBars,
  FaChevronLeft,
} from 'react-icons/fa';
import { Container, Content } from './styles';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const userId = 3;

  const handleToggleOpen = () => {
    setOpen(!open);
  };
  return (
    <Container open={open}>
      <nav>
        <div>
          <button onClick={handleToggleOpen} type="button">
            {open ? <FaChevronLeft /> : <FaBars />}
          </button>
        </div>
        <Link to="/">
          <FaWindows size={50} />
          <span>DASHBOARD</span>
        </Link>
        <Link to="/people">
          <FaUsers size={50} />
          <span>CIDADÃO</span>
        </Link>
        {userId >= 3 && (
          <Link to="/users">
            <FaIdCard size={50} />
            <span>USUÁRIOS</span>
          </Link>
        )}
        <Link to="/schedules">
          <FaCalendarPlus size={50} />
          <span>AGENDAMENTO</span>
        </Link>
        <Link to="/">
          <FaChartPie size={50} />
          <span>RELATÓRIOS</span>
        </Link>
      </nav>
      <aside>
        <Link to="/">
          <FaRegCommentDots size={30} />
        </Link>
        <Link to="/">
          <FaSignOutAlt size={30} />
        </Link>
      </aside>
    </Container>
  );
}
