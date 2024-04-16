import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

// Importing the BrowserRouter from react-router-dom for routing in the App
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
