import 'antd/dist/antd.css';
import './main.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: 'AIzaSyBGDyxzmt2Wcv1wAMv7MB9g3u8J5EKd-j4',
  authDomain: 'maggewebsite.firebaseapp.com',
  projectId: 'maggewebsite',
  storageBucket: 'maggewebsite.appspot.com',
  messagingSenderId: '499412846638',
  appId: '1:499412846638:web:8917ff86b0e0570209f7bf',
  measurementId: 'G-HL9LDYC0F3',
};
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
