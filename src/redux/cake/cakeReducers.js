import { BUY_CAKE, SELL_CAKE } from './cakeTypes';

const initialState = {
  numOfCakes: 50,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case SELL_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + Number(action.payload),
      };

    default:
      return state;
  }
};

export default cakeReducer;
