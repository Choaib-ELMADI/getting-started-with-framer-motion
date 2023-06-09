import React from 'react';
import { motion } from 'framer-motion';

import './Header.scss';



const Header = () => {
    return (
        <div className='app__header'>
            <div className='logo'><h3>SVG</h3></div>
            <motion.div 
                className='header'
                initial={{ y: -200 }}
                animate={{ y: -10 }}
                transition={{ 
                    delay: .35, 
                    type: 'spring', 
                    stiffness: 100,
                    damping: 15
                }}
            >
                <h3>Ait-mgoun</h3>
            </motion.div>
        </div>
    );
};

export default Header;