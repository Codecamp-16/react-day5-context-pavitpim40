import React from 'react';

function TodoItem({ todo, deleteTodo, index }) {
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
