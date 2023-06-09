import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.scss';
import { Header, Home, Step1, Step2, Step3, Modal } from './components';



const App = () => {
  const [selectedPlace, setSelectedPlace] = useState('');
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();

  return (
    <div className='app'>
      <Header />
      <Modal 
        showModal={ showModal } 
        setShowModal={ setShowModal } 
        setSelectedPlace={ setSelectedPlace }
      />
      <AnimatePresence onExitComplete={ () => setShowModal(false) }>
        <Routes location={ location } key={ location.key }>
          <Route path='/' element={ <Home /> } />
          
          <Route 
            path='/step1' 
            element={ 
              <Step1 
                selectedPlace={ selectedPlace } 
                setSelectedPlace={ setSelectedPlace }
                setSelectedActivities={ setSelectedActivities }
              /> 
            } 
          />

          <Route 
            path='/step2' 
            element={ 
              <Step2
                selectedActivities={ selectedActivities }
                setSelectedActivities={ setSelectedActivities }
                selectedPlace={ selectedPlace }
              /> 
            } 
          />

          <Route 
            path='/step3' 
            element={ 
              <Step3 
                selectedPlace={ selectedPlace }
                selectedActivities={ selectedActivities }
                setShowModal={ setShowModal }
              /> 
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;