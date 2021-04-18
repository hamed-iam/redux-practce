import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

const IceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Total Ice Creams {numOfIceCream} </h2>
      <button onClick={() => dispatch(buyIceCream())}>buy</button>
    </div>
  );
};

export default IceCreamContainer;
