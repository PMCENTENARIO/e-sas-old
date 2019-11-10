/*
Esta função realiza o armazenamento de dados no banco local de cada aplicação
Utiliza a lib: persist.
Em whitelist é add os reducers que precisam ser persistidos os dados.
*/

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'e-sas',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
