import { useState } from 'react';
import CounterDisplay from './components/CounterDisplay';
import DecreaseButton from './components/DecreaseButton';
import IncreaseButton from './components/IncreaseButton';
function App() {
  // Task-1 : Move ไป Counter Context
  // Task-2 : SetUp Context and Consume by Each Component
  // Task-3 : Remove Props
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

export default App;
