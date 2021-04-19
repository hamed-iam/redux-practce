import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCookie, sellCookie } from '../redux/cookie/cookieActions';

const CookieContainer = () => {
  const numOfCookies = useSelector((state) => state.cookie.numOfCookies);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Total Cookies {numOfCookies} </h2>
      <button onClick={() => dispatch(buyCookie(number))}>
        Buy {number} Cookie
      </button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(sellCookie(number))}>
        Sell {number} Cookies
      </button>
    </div>
  );
};

export default CookieContainer;
