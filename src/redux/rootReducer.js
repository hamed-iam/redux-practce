import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import cookieReducer from './cookie/cookieReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  cookie: cookieReducer,
});

export default rootReducer;
