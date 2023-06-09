import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import '../../App.scss';
const activities = ['Activity  01', 'Activity  02', 'Activity  03', 'Activity  04', 'Activity  05'];



const Step2 = ({ selectedActivities, setSelectedActivities }) => {
    const handleSelect = (activity) => {
        if (selectedActivities.includes(activity)) {
            setSelectedActivities(
                selectedActivities.filter((act) => (
                    act !== activity
                ))
            );
        }
        else {
            setSelectedActivities(
                [ ...selectedActivities, activity ]
            );
        }
    };

    return (
        <motion.div 
            className='app__step'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', delay: .2 }}
        >
            <h2>Step 2: Choose activities</h2>
            <ul>
                {
                    activities.map((activity) => (
                        <li
                            key={ activity }
                            onClick={ () => handleSelect(activity) }
                            className={ selectedActivities.includes(activity) ? 'active' : '' }
                        >
                            { activity }
                        </li>
                    ))
                }
            </ul>
            {
                selectedActivities.length >= 1 &&
                <Link className='link' to='/step3'>
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

export default Step2;