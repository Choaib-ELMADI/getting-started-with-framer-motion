import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.scss';



const Step2 = () => {
    return (
        <div className='app__step'>
            <Link className='link' to='/step3'>Visit Ait-mgoun</Link>
        </div>
    );
};

export default Step2;