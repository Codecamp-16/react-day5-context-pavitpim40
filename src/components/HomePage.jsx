import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function HomePage() {
  const { setIsLogin } = useContext(AuthContext);
  return (
    <div className='text-center'>
      <h1 className='text-2xl font-bold mb-2'>Welcome to Codecamp</h1>
      <p className='text-xl'>You have successfully logged in.</p>
      {/* Button for Logout */}
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
        onClick={() => setIsLogin(false)}
      >
        Log out
      </button>
    </div>
  );
}

export default HomePage;
