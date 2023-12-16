import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
  profile: profileReducer,
});
export default rootReducer;
