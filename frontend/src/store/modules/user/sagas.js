import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';
import { signFailure } from './actions';

import history from '~/services/history';

export function* signUp({ payload }) {
  const { name, phone, document, email, password, profile } = payload;

  try {
    const response = yield call(api.get, 'people', {
      name,
      phone,
      document,
    });

    yield call(api.post, 'people/', response.data.id, '/users', {
      email,
      password,
      profile,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(signFailure());
  }
}

export default all([takeLatest('@user/SIGN_UP_REQUEST', signUp)]);
