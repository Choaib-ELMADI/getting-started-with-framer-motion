import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../App.scss';
const activities = ['Activity  01', 'Activity  02', 'Activity  03', 'Activity  04', 'Activity  05'];



const Step2 = () => {
    const [selectedActivities, setSelectedActivities] = useState([activities]);

    const handleSelect = (activity) => {
        if (selectedActivities.includes(activity)) {
            setSelectedActivities(
                selectedActivities.filter((act) => (
                    act !== activity
                ))
            );
        }
        else {
            setSelectedActivities(
                [ ...selectedActivities, activity ]
            );
        }
    };

    return (
        <div className='app__step'>
            <h2>Step 2: Choose activities</h2>
            <ul>
                {
                    activities.map((activity) => (
                        <li
                            key={ activity }
                            onClick={ () => handleSelect(activity) }
                            className={ selectedActivities.includes(activity) ? 'active' : '' }
                        >
                            { activity }
                        </li>
                    ))
                }
            </ul>
            {
                selectedActivities.length >= 1 &&
                <Link className='link' to='/step3'>Visit Ait-mgoun</Link>
            }
        </div>
    );
};

export default Step2;