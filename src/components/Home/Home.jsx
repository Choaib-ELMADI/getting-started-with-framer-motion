import React from 'react';

import './Home.scss';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className='app__home'>
            <h1>Welcome to Ait-mgoun</h1>
            <Link className='link' to='/step1'>Visit Ait-mgoun</Link>
        </div>
    );
};

export default Home;