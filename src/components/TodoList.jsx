import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../context/TodoContext';

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <ul className='list-disc pl-6'>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
}

export default TodoList;
