// Configuração de upload de arquilos utilizando a lib multer
import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      // Gera númeraçãoaleatória
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);
        return cb(null, res.toString('hex') + extname(file.originalname)); // Parametro hex »» Converte a geração para números e letras
      });
    },
  }),
};
