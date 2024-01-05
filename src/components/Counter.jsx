import React from 'react';
import DecreaseButton from './DecreaseButton';
import CounterDisplay from './CounterDisplay';
import IncreaseButton from './IncreaseButton';

function Counter() {
  return (
    <div className='max-w-xs mx-auto p-6 bg-white shadow-lg rounded-md'>
      <h2 className='text-3xl font-bold mb-4'>Counter</h2>
      <div className='flex items-center justify-between'>
        <DecreaseButton />
        <CounterDisplay />
        <IncreaseButton />
      </div>
    </div>
  );
}

export default Counter;
