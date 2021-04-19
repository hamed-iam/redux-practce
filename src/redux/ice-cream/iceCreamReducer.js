import { BUY_ICE_CREAM, SELL_ICE_CREAM } from './iceCreamTypes';

const initialState = {
  numOfIceCreams: 80,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case SELL_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + +action.payload,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
