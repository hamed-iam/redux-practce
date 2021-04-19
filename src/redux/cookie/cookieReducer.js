import { BUY_COOKIE, SELL_COOKIE } from './cookieTypes';

const initialState = {
  numOfCookies: 75,
};

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COOKIE:
      return {
        ...state,
        numOfCookies: state.numOfCookies - action.payload,
      };
    case SELL_COOKIE:
      return {
        ...state,
        numOfCookies: state.numOfCookies + +action.payload,
      };

    default:
      return state;
  }
};

export default cookieReducer;
