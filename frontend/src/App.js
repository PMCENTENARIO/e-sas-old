/*
Neste arquivo estão as configurações da aplicação referente a
rotas, compartinhamento de estados de componentes, estilos e
navegação.
*/

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import '~/config/ReactotronConfig';
/* Obs: Este precisa vir posterior as configurações do reactotron */

import { store, persistor } from './store';

import Routes from '~/routes';
import history from '~/services/history';
import GlobalStyles from '~/styles/globol';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
