import { useState } from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
function App() {
  // START == AuthContext = Authenticate Context
  const [isLogin, setIsLogin] = useState(false);

  // Challenge :  FN login() แล้วแชร์ให้แทน setIsLogin
  // Challenge :  FN logout() แล้วแชร์ให้แทน setIsLogin
  // END == AuthContext = Authenticate Context

  return (
    <div className='flex justify-center items-center h-screen'>
      {!isLogin ? <LoginPage setIsLogin={setIsLogin} /> : <HomePage setIsLogin={setIsLogin} />}
    </div>
  );
}

export default App;
