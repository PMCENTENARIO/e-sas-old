import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';
import { signFailure, personAll } from './actions';

import history from '~/services/history';

export function* personRequest() {
  try {
    const response = yield call(api.get, 'people');

    yield put(personAll(response.data));

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(signFailure());
  }
}

export default all([takeLatest('@person/PERSON_ALL_REQUEST', personRequest)]);
