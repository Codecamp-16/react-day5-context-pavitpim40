import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoContextProvider from './context/TodoContext';

function App() {
  return (
    <>
      <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
        <div className='max-w-md bg-white rounded p-4 shadow'>
          <h1 className='text-2xl font-semibold mb-4'>TODO List</h1>
          <TodoContextProvider>
            <TodoInput />
            <TodoList />
          </TodoContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
