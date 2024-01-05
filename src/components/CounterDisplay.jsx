import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function CounterDisplay() {
  const { count } = useContext(CounterContext);
  return <span className='text-xl font-semibold'>{count}</span>;
}

export default CounterDisplay;
