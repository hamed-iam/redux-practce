import { BUY_CHIPS, SELL_CHIPS } from './chipsTypes';

const initialState = {
  numOfChips: 60,
};

const chipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHIPS:
      return {
        ...state,
        numOfChips: state.numOfChips - action.payload,
      };
    case SELL_CHIPS:
      return {
        ...state,
        numOfChips: state.numOfChips + +action.payload,
      };

    default:
      return state;
  }
};

export default chipsReducer;
