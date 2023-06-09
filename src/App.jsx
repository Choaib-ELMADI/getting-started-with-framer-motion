import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import { Header, Home, Step1, Step2, Step3 } from './components';



const App = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);

  return (
    <div className='app'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          
          <Route 
            path='/step1' 
            element={ 
              <Step1 
                selectedPlace={ selectedPlace } 
                setSelectedPlace={ setSelectedPlace } 
              /> 
            } 
          />

          <Route 
            path='/step2' 
            element={ 
              <Step2
                selectedActivities={ selectedActivities }
                setSelectedActivities={ setSelectedActivities }
              /> 
            } 
          />

          <Route 
            path='/step3' 
            element={ 
              <Step3 
                selectedPlace={ selectedPlace }
                selectedActivities={ selectedActivities }
              /> 
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;