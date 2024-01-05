import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { isLogin } = useContext(AuthContext);

  // Challenge :  FN login() แล้วแชร์ให้แทน setIsLogin
  // Challenge :  FN logout() แล้วแชร์ให้แทน setIsLogin
  // END == AuthContext = Authenticate Context

  return (
    <div className='flex justify-center items-center h-screen'>
      {!isLogin ? <LoginPage /> : <HomePage />}
    </div>
  );
}

export default App;
