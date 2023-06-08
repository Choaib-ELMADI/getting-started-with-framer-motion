import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import { Header, Home, Step1, Step2, Step3 } from './components';



const App = () => {
  return (
    <div className='app'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/step1' element={ <Step1 /> } />
          <Route path='/step2' element={ <Step2 /> } />
          <Route path='/step3' element={ <Step3 /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;