import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream, sellIceCream } from '../redux/ice-cream/iceCreamActions';
const IceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Total Ice Creams {numOfIceCreams} </h2>
      <button onClick={() => dispatch(buyIceCream(number))}>
        Buy Ice Cream
      </button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(sellIceCream(number))}>
        Sell {number} Ice Cream
      </button>
    </div>
  );
};

export default IceCreamContainer;
