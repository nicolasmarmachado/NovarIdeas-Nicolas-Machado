import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCN-LXWEl8CAxgRGwQEZJnFANwiKEKdlNU",
  authDomain: "novarideas.firebaseapp.com",
  projectId: "novarideas",
  storageBucket: "novarideas.appspot.com",
  messagingSenderId: "166698855643",
  appId: "1:166698855643:web:81d97aa62492d030ce70fe"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
