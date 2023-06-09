import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.scss';
const places = ['Imi-Nwarg', 'Tasli', 'Ait-Etiq', 'Tamda'];



const Step1 = ({ selectedPlace, setSelectedPlace }) => {
    return (
        <div className='app__step'>
            <h2>Step 1: Choose a place</h2>
            <ul>
                {
                    places.map((place) => (
                        <li 
                            key={ place }
                            onClick={  () => setSelectedPlace(place) }
                            className={ place === selectedPlace ? 'active' : '' }
                        >
                            { place }
                        </li>
                    ))
                }
            </ul>
            {
                selectedPlace &&
                <Link className='link' to='/step2'>Visit Ait-mgoun</Link>
            }
        </div>
    );
};

export default Step1;