import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterSwitch from './RouterSwitch';
import MyFooter from './components/MyFooter/MyFooter';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterSwitch />
    <MyFooter />
  </React.StrictMode>
);
