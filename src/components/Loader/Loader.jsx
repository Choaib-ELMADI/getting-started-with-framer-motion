import React from 'react';
import { motion, useCycle } from 'framer-motion';

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
    animationTwo: {
        x: 0,
        y: [0, -40],
        transition: {
            y: {
                duration: .25,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeOut'
            },
        }
    },
};



const Loader = () => {
    const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');

    return (
        <div className='app__loader'>
            <motion.div 
                className='ball'
                variants={ loaderVariants }
                animate={ animation }
            />
            <div onClick={ () => cycleAnimation() }>Cycle Loader</div>
        </div>
    );
};

export default Loader;