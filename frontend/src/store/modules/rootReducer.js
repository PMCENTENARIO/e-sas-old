import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import person from './person/reducer';
import schedule from './schedule/reducer';

export default combineReducers({ auth, user, person, schedule });
