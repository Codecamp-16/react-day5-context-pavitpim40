import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos = [], deleteTodo }) {
  return (
    <ul className='list-disc pl-6'>
      {todos.map((todo, index) => (
        <TodoItem 
					key={index}
					todo={todo} 
					index={index} 
					deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
