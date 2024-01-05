import React, { useContext } from 'react';
import CounterDisplay from './CounterDisplay';
import Button from './Button';
import { CounterContext } from '../context/CounterContext';

function Counter() {
  const { increment, decrement } = useContext(CounterContext);
  return (
    <div className='max-w-xs mx-auto p-6 bg-white shadow-lg rounded-md'>
      <h2 className='text-3xl font-bold mb-4'>Counter</h2>
      <div className='flex items-center justify-between'>
        <Button color='secondary' onClick={decrement}>
          Decrement
        </Button>
        <CounterDisplay />
        <Button color='primary' onClick={increment}>
          Increment
        </Button>
      </div>
    </div>
  );
}

export default Counter;
