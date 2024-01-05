import React from 'react';
import TodoItem from './TodoItem';
import { useTodos } from '../context/TodoContext';

function TodoList() {
  const { todos } = useTodos();
  return (
    <ul className='list-disc pl-6'>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
}

export default TodoList;
