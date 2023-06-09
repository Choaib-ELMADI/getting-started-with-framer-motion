import React from 'react';
import { motion } from 'framer-motion';

import './Home.scss';
import { Link } from 'react-router-dom';
const buttonVariants = {
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


const Home = () => {
    return (
        <motion.div 
            className='app__home'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
        >
            <h1>Welcome to Ait-mgoun</h1>
            <Link className='link' to='/step1'>
                <motion.div
                    variants={ buttonVariants }
                    whileHover='hover'
                >Visit Ait-mgoun</motion.div>
            </Link>
        </motion.div>
    );
};

export default Home;