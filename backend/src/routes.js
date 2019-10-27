import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import PersonController from './app/controllers/PersonController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProfileController from './app/controllers/ProfileController';
import TaskController from './app/controllers/TaskController';
import AddressController from './app/controllers/AddressController';
import ScheduleController from './app/controllers/ScheduleController';
import Schedule from './app/models/Schedule';

const upload = multer(multerConfig);
const routes = new Router();

routes.post('/people', PersonController.store);
routes.post('/sessions', SessionController.store);

// Abaixo desta autenticação, rotas autorizadas pelo token (Usuário autenticado)
routes.use(authMiddleware);

routes.get('/people', PersonController.index);
routes.post('/people/:person_id/users', UserController.store);
routes.put('/people/:id', PersonController.update);
routes.get('/people/:id', PersonController.show);

routes.put('/users', UserController.update);
routes.get('/users', UserController.index);

routes.get('/schedules', ScheduleController.index);
routes.post('/schedules', ScheduleController.store);
routes.put('/schedules/:id', ScheduleController.update);
routes.delete('/schedules');

routes.get('/addresses');
routes.post('/addresses', AddressController.store);
routes.put('/addresses');
routes.delete('/addresses');

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);
routes.put('/tasks/:id', TaskController.update);

routes.post('/files', upload.single('file'), FileController.store); // »» Upload de Arquilos
routes.get('/profile', ProfileController.index);

export default routes;
