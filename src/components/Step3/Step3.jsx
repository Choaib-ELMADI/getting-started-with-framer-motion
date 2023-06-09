import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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



const Step3 = ({ selectedPlace, selectedActivities }) => {
    const [isShown, setIsShown] = useState(true);

    setTimeout(() => {
        setIsShown(false);
    }, 3500);

    return (
        <motion.div 
            className='app__step step3'
            variants={ containerVariants }
            initial='hidden'
            animate='visible'
        >
            <AnimatePresence>
                { isShown && 
                    <motion.h2
                        exit={{ opacity: 0, y: -100 }}
                    >Thanks for your visit :)</motion.h2>
                }
            </AnimatePresence>
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