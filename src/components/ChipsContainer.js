import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyChips, sellChips } from '../redux/chips/chipsActions';
const ChipsContainer = () => {
  const numOfChips = useSelector((state) => state.chips.numOfChips);
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Total Chips {numOfChips} </h2>
      <button onClick={() => dispatch(buyChips(number))}>
        Buy {number} Chips
      </button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(sellChips(number))}>
        Sell {number} Chips
      </button>
    </div>
  );
};

export default ChipsContainer;
