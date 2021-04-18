import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const CakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Total Cakes {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>buy</button>
    </div>
  );
};

export default CakeContainer;
