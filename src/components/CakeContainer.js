import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake, sellCake } from '../redux/cake/cakeActions';

const CakeContainer = () => {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Total Cakes {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} Cake
      </button>
      <input
        type="number"
        value={number}
        onChange={(e) => +setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(sellCake(number))}>
        Sell {number} Cake
      </button>
    </div>
  );
};

export default CakeContainer;
