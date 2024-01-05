import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import CounterContextProvider from './context/CounterContext.jsx';

// S3 - ครอบ Provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>
);
