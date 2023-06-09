import React from 'react';
import { motion } from 'framer-motion';

import '../../App.scss';
const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                duration: .5,
                repeat: Infinity,
                repeatType: 'reverse'
            },
            y: {
                duration: .25,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeOut'
            },
        }
    },
    visible: {

    },
}



const Loader = () => {
    return (
        <div className='app__loader'>
            <motion.div 
                className='ball'
                variants={ loaderVariants }
                animate='animationOne'
            />
        </div>
    );
};

export default Loader;