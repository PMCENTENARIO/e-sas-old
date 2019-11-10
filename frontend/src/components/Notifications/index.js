import React, { useState, useEffect } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { FaBell } from 'react-icons/fa';
import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('logs');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  const handleToggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <FaBell color="#34495e" size={24} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              <button type="button">Marcar como lida</button>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
