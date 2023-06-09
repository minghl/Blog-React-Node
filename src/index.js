import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from './context/authContext.js';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);