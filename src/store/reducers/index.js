import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
  profile: profileReducer,
  product: productReducer,
});
export default rootReducer;
