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
const innerModalVariants = {
    hidden: {
        y: '-60vh',
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .5
        }
    }
};



const Modal = ({ showModal, setShowModal, setSelectedPlace }) => {
    return (
        <AnimatePresence>
            { showModal &&
                <motion.div 
                    className='app__modal'
                    variants={ modalVariants }
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <motion.div 
                        className='modal'
                        variants={ innerModalVariants }
                        initial='hidden'
                        animate='visible'
                    >
                        <p>Want to visit another place?</p>
                        <Link to='/' className='link'>
                            <div
                                onClick={ () => {
                                    setSelectedPlace('')
                                }}
                            >Start again</div>
                        </Link>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default Modal;