import authReducer from './authReducer';
import imageReducer from './imageReducer';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  auth:authReducer,
  form:formReducer,
  images:imageReducer
});
