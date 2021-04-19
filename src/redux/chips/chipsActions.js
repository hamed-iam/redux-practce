import { BUY_CHIPS, SELL_CHIPS } from './chipsTypes';

export const buyChips = (number = 1) => {
  return {
    type: BUY_CHIPS,
    payload: number,
  };
};

export const sellChips = (number = 1) => {
  return {
    type: SELL_CHIPS,
    payload: number,
  };
};
