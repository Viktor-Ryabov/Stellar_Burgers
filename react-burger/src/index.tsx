import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import AppHeader from "./components/AppHeader/AppHeader";
import MainSection from "./components/MainSection/MainSection"





ReactDOM.render(
  <React.StrictMode>

    <AppHeader />

    <MainSection />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
