import React from 'react';
import './app.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './main/Main';
import Card from './card/Card';
import Error from './main/Error';

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <Routes>
        <Route exact path='/' element={ <Main /> } />
        <Route path='/card/:username/:reponame' element={ <Card /> } />
        <Route path='/error' element={ <Error /> } />
        <Route path='*' element={<Navigate to="/" /> } />
        {/* <Route path='*' element={ <Main /> } /> */}
      </Routes>
    </div>
  );
};

export default App;