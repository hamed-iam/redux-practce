import { useDispatch, useSelector } from 'react-redux';
import { buyCookie } from '../redux/cookie/cookieActions';
const CookieContainer = () => {
  const numOfCookies = useSelector((state) => state.cookie.numOfCookies);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Cookies {numOfCookies}</h2>
      <button onClick={() => dispatch(buyCookie())}>Buy</button>
    </div>
  );
};

export default CookieContainer;
