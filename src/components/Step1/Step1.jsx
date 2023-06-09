import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../../App.scss';
const places = ['Imi-Nwarg', 'Tasli', 'Ait-Etiq', 'Tamda'];



const Step1 = ({ selectedPlace, setSelectedPlace }) => {
    return (
        <motion.div 
            className='app__step'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', delay: .2 }}
        >
            <h2>Step 1: Choose a place</h2>
            <ul>
                {
                    places.map((place) => (
                        <li 
                            key={ place }
                            onClick={  () => setSelectedPlace(place) }
                            className={ place === selectedPlace ? 'active' : '' }
                        >
                            { place }
                        </li>
                    ))
                }
            </ul>
            {
                selectedPlace &&
                <Link className='link' to='/step2'>
                    <motion.div
                        initial={{ y: 30 }}
                        animate={{ y: 0 }}
                    >
                        Next
                    </motion.div>
                </Link>
            }
        </motion.div>
    );
};

export default Step1;