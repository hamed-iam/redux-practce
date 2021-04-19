import { BUY_COOKIE, SELL_COOKIE } from './cookieTypes';

export const buyCookie = (number = 1) => {
  return {
    type: BUY_COOKIE,
    payload: number,
  };
};

export const sellCookie = (number = 1) => {
  return {
    type: SELL_COOKIE,
    payload: number,
  };
};
