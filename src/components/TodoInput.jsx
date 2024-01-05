import { useState } from 'react';
import { useTodos } from '../context/TodoContext';
function TodoInput() {
  const { addTodo } = useTodos();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    addTodo(todoText);
    setTodoText('');
  };
  return (
    <div className='mb-4 flex'>
      <input
        type='text'
        className='w-full border rounded px-3 py-2 mr-2'
        placeholder='Enter a task'
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
