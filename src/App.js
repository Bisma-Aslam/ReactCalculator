import React from 'react';
import './App.css';
import Home from './components/Home';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <>
    <div className='nav'>
        <h1>Math Magician</h1>
        <ul>
          <Link  className='ulitem' to='/'>Home</Link>
          <Link className='ulitem' to='calculator'>Calculator</Link>
          <Link className='ulitem' to='/quote'>Quote</Link>
        </ul>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/calculator' element={<Calculator/>}/>
      <Route path='/quote' element={<Quote/>}/>
    </Routes>
    </>
  );
}

export default App;