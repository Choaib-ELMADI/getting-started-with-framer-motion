import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import '../../App.scss';
const availableActivities = {
    Imi_Nwarg: [
        'Tassout Fishing', 'Tassaout Swimming', 'Almonds and Nuts', 'Discover Tazakht'
    ],
    Tasli: [
        'Tasli Activity 1', 'Tasli Activity 2', 'Tasli Activity 3', 'Tasli Activity 4'
    ],
    Ait_Etiq: [
        'Discover Old Culture', 'Tassaout Source', 'Tripping and Adventures',
    ],
    Tamda: [
        'Lake Discovering', 'Tamda Fishing', 'Tamda Swimming',
    ],
};
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
            damping: 15,
        },
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



const Step2 = ({ selectedActivities, setSelectedActivities, selectedPlace }) => {
    const activities = availableActivities[selectedPlace?.replace('-', '_')];
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
            variants={ containerVariants }
            initial='hidden'
            animate='visible'
        >
            <h2>Step 2: Choose activities</h2>
            <ul>
                {
                    activities?.map((activity) => (
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

export default Step2;