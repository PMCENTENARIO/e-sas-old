import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonToolbar,
  OverlayTrigger,
  Tooltip,
  Button,
} from 'react-bootstrap';

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
import ModalConfirm from '~/components/Modals/ModalConfirm';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const userId = 3;

  const handleToggleOpen = () => {
    setOpen(!open);
  };
  const handleModal = e => {
    if (e.target.id !== 'cancel') {
      localStorage.removeItem('persist:e-s@s');
      window.location.reload();
    }
    setModalShow(false);
  };

  return (
    <Container open={open}>
      <nav>
        <div>
          <button onClick={handleToggleOpen} type="button">
            {open ? <FaChevronLeft /> : <FaBars />}
          </button>
        </div>
        <ButtonToolbar>
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip>
                <strong>Dashboard</strong>.
              </Tooltip>
            }
          >
            <Link to="/">
              <FaWindows size={50} />
              <span>DASHBOARD</span>
            </Link>
          </OverlayTrigger>
        </ButtonToolbar>

        <ButtonToolbar>
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip>
                <strong>Cadastro Cidadão</strong>.
              </Tooltip>
            }
          >
            <Link to="/people">
              <FaUsers size={50} />
              <span>CIDADÃO</span>
            </Link>
          </OverlayTrigger>
        </ButtonToolbar>
        <ButtonToolbar>
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip>
                <strong>Cadastro de Usuários</strong>.
              </Tooltip>
            }
          >
            {userId >= 3 && (
              <Link to="/users">
                <FaIdCard size={50} />
                <span>USUÁRIOS</span>
              </Link>
            )}
          </OverlayTrigger>
        </ButtonToolbar>
        <ButtonToolbar>
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip>
                <strong>Agendamento</strong>.
              </Tooltip>
            }
          >
            <Link to="/schedules">
              <FaCalendarPlus size={50} />
              <span>AGENDAMENTO</span>
            </Link>
          </OverlayTrigger>
        </ButtonToolbar>
        <ButtonToolbar>
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip>
                <strong>Relatórios</strong>.
              </Tooltip>
            }
          >
            <Link to="/">
              <FaChartPie size={50} />
              <span>RELATÓRIOS</span>
            </Link>
          </OverlayTrigger>
        </ButtonToolbar>
      </nav>
      <aside>
        <div>
          <Link to="/">
            <FaRegCommentDots size={30} />
          </Link>
        </div>
        <div>
          <button
            style={{ background: 'transparent !important' }}
            type="button"
            onClick={() => setModalShow(true)}
          >
            <FaSignOutAlt size={30} />
          </button>
          <ModalConfirm
            show={modalShow}
            onHide={() => setModalShow(false)}
            handleModal={handleModal}
          />
        </div>
      </aside>
    </Container>
  );
}
