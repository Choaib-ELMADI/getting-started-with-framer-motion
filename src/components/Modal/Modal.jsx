import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import '../../App.scss';
const modalVariants = {
    hidden: { 
        opacity: 0,
    },
    visible: {
        opacity: 1
    }
};



const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence>
            { showModal &&
                <motion.div 
                    className='app__modal'
                    variants={ modalVariants }
                    initial='hidden'
                    animate='visible'
                >

                </motion.div>
            }
        </AnimatePresence>
    );
};

export default Modal;