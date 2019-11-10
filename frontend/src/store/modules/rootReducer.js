import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import person from './person/reducer';

export default combineReducers({ auth, user, person });
