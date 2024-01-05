// Lv1 Component
function App() {
  return (
    <div className='flex justify-center mt-4'>
      <Parent />
    </div>
  );
}

// Lv2 Component
function Parent() {
  return <Child />;
}

// Lv3 Component
function Child() {
  return <GrandChild />;
}

// Lv4 Component
// Step-4 => Consumer : React.useContext(MyContext);
import React, { useContext } from 'react';
import { MyContext } from './context/MyContext';

function GrandChild() {
  // const sharedObj = React.useContext(MyContext);
  // console.log(sharedObj);

  const { data } = useContext(MyContext);

  return <h1 className='text-2xl italic font-bold'>{data}</h1>;
}

export default App;
