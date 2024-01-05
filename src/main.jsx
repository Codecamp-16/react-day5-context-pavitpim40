import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import MyContextProvider from './context/MyContext.jsx';

// Step-3 : เอา Provide ไปครอบ Tag ที่ต้องการเรียกใช้งานของที่ share
ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);
