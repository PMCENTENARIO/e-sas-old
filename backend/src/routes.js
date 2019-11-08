import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import PersonController from './app/controllers/PersonController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import TaskController from './app/controllers/TaskController';
import AddressController from './app/controllers/AddressController';
import ScheduleController from './app/controllers/ScheduleController';
import LogController from './app/controllers/LogController';
import NotificationController from './app/controllers/NotificationController';
import CollaboratorController from './app/controllers/CollaboratorController';

const upload = multer(multerConfig);
const routes = new Router();

routes.post('/people', PersonController.store);
routes.post('/sessions', SessionController.store);

// Abaixo desta autenticação, rotas autorizadas pelo token (Usuário autenticado)
routes.use(authMiddleware);

routes.get('/people', PersonController.index);
routes.put('/people/:id', PersonController.update);
routes.get('/people/:id', PersonController.show);

routes.get('/collaborators', CollaboratorController.index);
routes.get('/collaborators/:id', CollaboratorController.show);
routes.put('/collaborators/:id', CollaboratorController.update);
routes.delete('/collaborators/:id', CollaboratorController.delete);

routes.get('/users', UserController.index);
routes.post('/people/:person_id/users', UserController.store);
routes.put('/users/:id', UserController.update);

routes.get('/schedules', ScheduleController.index);
routes.post('/schedules', ScheduleController.store);
routes.put('/schedules/:id', ScheduleController.update);
routes.delete('/schedules/:id', ScheduleController.delete);

routes.get('/addresses', AddressController.index);
routes.put('/addresses/:id', AddressController.update);
routes.delete('/addresses');

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);
routes.put('/tasks/:id', TaskController.update);

routes.get('/logs', LogController.index);

routes.get('/notifications', NotificationController.index);
routes.post('/notifications', NotificationController.store);

routes.post('/files', upload.single('file'), FileController.store); // »» Upload de Arquilos
routes.get('/providers', ProviderController.index);

export default routes;
