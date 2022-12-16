import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => (
  <div className='app'>
    <h1>Home</h1>
    <Link to='/shopping'>Shopping</Link>
  </div>
);

export default App;
