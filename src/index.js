import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <nav>
      <h1>Sigma</h1>
      <ul>
        <li><a href="#formPage">Add</a></li>
      </ul>
    </nav>
    <App />
    <footer>
      <h4>Sigma Student Mark Management System | Developed by Devakrishnan</h4>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
