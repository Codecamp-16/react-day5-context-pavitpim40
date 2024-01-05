import { useState } from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className='flex justify-center items-center h-screen'>
      {!isLogin 
        ? <LoginPage setIsLogin={setIsLogin} /> 
        : <HomePage setIsLogin={setIsLogin} />
      }
    </div>
  );
}

export default App;
