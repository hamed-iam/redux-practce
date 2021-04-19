import { combineReducers } from 'redux';
import iceCreamReducer from './ice-cream/iceCreamReducer';
import cakeReducer from './cake/cakeReducers';
import chipsReducer from './chips/chipsReducers';
import cookieReducer from './cookie/cookieReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  chips: chipsReducer,
  cookie: cookieReducer,
});

export default rootReducer;
