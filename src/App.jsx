import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
        <div className='max-w-md bg-white rounded p-4 shadow'>
          <h1 className='text-2xl font-semibold mb-4'>TODO List</h1>
          <TodoInput setTodos={setTodos} />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
      </div>
    </>
  );
}

export default App;
