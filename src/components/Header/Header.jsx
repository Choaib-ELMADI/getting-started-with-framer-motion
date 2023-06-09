import React from 'react';
import { motion } from 'framer-motion';

import './Header.scss';
import images from '../../constants/images';



const Header = () => {
    return (
        <div className='app__header'>
            <motion.div 
                className='logo'
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ 
                    delay: .35, 
                    type: 'spring', 
                    stiffness: 100,
                    damping: 15
                }}
                drag
                dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
            >
                <img src={ images.mountain } alt='Mountains' draggable='false' />
            </motion.div>
            <motion.div 
                className='header'
                initial={{ y: -200 }}
                animate={{ y: -16 }}
                transition={{ 
                    delay: .35, 
                    type: 'spring', 
                    stiffness: 100,
                    damping: 15
                }}
            >
                <h2>Ait-mgoun</h2>
            </motion.div>
        </div>
    );
};

export default Header;
