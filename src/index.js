//importing React Namespace we have multiple class and inbuilt function 
import React from 'react';
//transpile react base jsx ReactDOM to realDOM
import ReactDOM from 'react-dom/client';
//importing app component (functional component) from app file
import App from './App';
//importing bootstrap css file
import 'bootstrap/dist/css/bootstrap.min.css';

//creating a constant variable 
//Creating a root for document.getElementById root 
const root = ReactDOM.createRoot(document.getElementById('root'));
//jsx is converted into real DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
