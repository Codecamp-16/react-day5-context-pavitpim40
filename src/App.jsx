import { useState } from 'react';
import CounterDisplay from './components/CounterDisplay';
import DecreaseButton from './components/DecreaseButton';
import IncreaseButton from './components/IncreaseButton';
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='max-w-xs mx-auto p-6 bg-white shadow-lg rounded-md'>
      <h2 className='text-3xl font-bold mb-4'>Counter</h2>
      <div className='flex items-center justify-between'>
        <DecreaseButton decrement={decrement} />
        <CounterDisplay count={count} />
        <IncreaseButton increment={increment} />
      </div>
    </div>
  );
}

export default App;
