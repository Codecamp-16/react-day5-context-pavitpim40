import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ContentProvider from './context/ContentContext.jsx';
import SubContentProvider from './context/SubContentContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContentProvider>
    <SubContentProvider>
      <App />
    </SubContentProvider>
  </ContentProvider>
);
