import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import PersonController from './app/controllers/PersonController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProfileController from './app/controllers/ProfileController';

const upload = multer(multerConfig);
const routes = new Router();

routes.get('/people', PersonController.index);
routes.post('/persons', PersonController.store);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Abaixo desta autenticação, rotas autorizadas pelo token (Usuário autenticado)
routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store); // »» Upload de Arquilos
routes.get('/profile', ProfileController.index);

export default routes;
