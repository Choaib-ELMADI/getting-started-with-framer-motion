import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../../App.scss';
const places = ['Imi-Nwarg', 'Tasli', 'Ait-Etiq', 'Tamda'];
const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { 
            type: 'spring', 
            delay: .2,
            damping: 15
        },
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
        }
    }
};
const nextVariants = {
    hidden: {
        y: 30,
    },
    visible: {
        y: 0,
        transition: { delay: 0 }
    },
    hover: {
        scale: 1.04,
        textShadow: '0px 0px 8px var(--white__trs)',
        boxShadow: '0px 0px 8px var(--white)',
        transition: {
            duration: .4,
            repeatType: 'reverse',
            repeat: Infinity
        }
    },
};



const Step1 = ({ selectedPlace, setSelectedPlace, setSelectedActivities }) => {
    return (
        <motion.div 
            className='app__step'
            variants={ containerVariants }
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h2>Step 1: Choose a place</h2>
            <ul>
                {
                    places.map((place) => (
                        <li 
                            key={ place }
                            onClick={  () => {
                                setSelectedPlace(place);
                                setSelectedActivities([]);
                            }}
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
                        variants={ nextVariants }
                        whileHover='hover'
                    >
                        Next
                    </motion.div>
                </Link>
            }
        </motion.div>
    );
};

export default Step1;