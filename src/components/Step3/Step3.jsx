import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import '../../App.scss';
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
            when: 'beforeChildren',
            staggerChildren: .35
        },
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
        }
    }
};
const childVariants = {
    hidden: {
        opacity: 0,
        y: -15,
    },
    visible: {
        opacity: 1,
        y: 0,
    }
};



const Step3 = ({ selectedPlace, selectedActivities, setShowModal }) => {
    useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 5000);
    }, [setShowModal]);

    return (
        <motion.div 
            className='app__step step3'
            variants={ containerVariants }
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h2>Thanks for your visit :)</h2>
            <motion.p
                variants={ childVariants }
                style={{ fontSize: 'calc(var(--normal__size) + 6px' }}
            >
                You choosed to visit
                <span 
                    style={{ 
                        color: 'var(--black)', 
                        fontWeight: 'bold' 
                    }}
                > { selectedPlace }</span>
            </motion.p>
            <motion.div 
                className='selection'
                variants={ childVariants }
            >
                <p style={{ fontSize: 'calc(var(--normal__size) + 4px' }}><b>Your activities are:</b></p>
                {
                    selectedActivities?.map((activity) => (
                        <p key={ activity }>{ activity }</p>
                    ))
                }
            </motion.div>
        </motion.div>
    );
};

export default Step3;