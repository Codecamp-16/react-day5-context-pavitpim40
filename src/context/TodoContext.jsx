// S-1 : สร้าง Context
import { createContext, useState, useContext } from 'react';

export const TodoContext = createContext();

// S2: Provider *******
export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  // now :  addTodo
  // now :  deleteTodo
  // future : updateTodo
  // future:  fetchTodo
  const addTodo = (newTodo) => {
    if (newTodo.trim() !== '') {
      setTodos((cur) => [...cur, newTodo]);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>{children}</TodoContext.Provider>
  );
}

// Customhook
export const useTodos = () => {
  // const sharedObj = useContext(TodoContext);
  // return sharedObj;

  return useContext(TodoContext);
};
