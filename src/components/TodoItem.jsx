import React from 'react';
import { useTodos } from '../context/TodoContext';

function TodoItem({ todo, index }) {
  const { deleteTodo } = useTodos();
  return (
    <li className='mb-2 flex justify-between'>
      <span className='text-black'>{todo}</span>
      <button className='text-red-500 ml-2' onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
