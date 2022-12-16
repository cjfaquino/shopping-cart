import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Shopping from './components/Shopping';

const RouterSwitch = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/shopping' element={<Shopping />} />
    </Routes>
  </Router>
);

export default RouterSwitch;
