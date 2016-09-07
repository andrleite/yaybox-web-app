import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import loginReducer from './login_reducer';

const rootReducer = combineReducers({
  form,
  login: loginReducer
});

export default rootReducer;