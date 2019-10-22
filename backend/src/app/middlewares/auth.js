// Pega informações do authorizaion dos header e compara, caso for válido libera
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'Token not provided' });

  const [, token] = authHeader.split(' '); // Divide o token em dois */

  try {
    // Realiza a decodificação do token utilizando promisify
    const decoded = await promisify(jwt.verify)(token, authConfig.SECRET);
    req.userId = decoded.id; // Add id usuário a request
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
