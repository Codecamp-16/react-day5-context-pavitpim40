import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function IncreaseButton() {
  const { increment } = useContext(CounterContext);
  return (
    <button
      className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'
      onClick={increment}
    >
      Increment
    </button>
  );
}

export default IncreaseButton;
