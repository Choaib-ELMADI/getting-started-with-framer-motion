import React from 'react';
import { motion } from 'framer-motion';

import './Home.scss';
import { Link } from 'react-router-dom';



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
                <div>Visit Ait-mgoun</div>
            </Link>
        </motion.div>
    );
};

export default Home;