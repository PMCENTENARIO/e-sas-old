import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import '~/config/ReactotronConfig';
/* Obs: Este precisa vir posterior as configurações do reactotron */
import store from './store';

import Routes from '~/routes';
import history from '~/services/history';
import GlobalStyles from '~/styles/globol';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
