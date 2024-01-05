// S1-createContext
import { createContext, useState } from 'react';

export const CounterContext = createContext();

// S2-Provider
export default function CounterContextProvider({ children }) {
  // Start - Counter Context
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  // End - Counter Context

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}
