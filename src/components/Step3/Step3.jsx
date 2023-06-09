import React from 'react';

import '../../App.scss';



const Step3 = ({ selectedPlace, selectedActivities }) => {
    return (
        <div className='app__step step3'>
            <h2>Thanks for your visit :)</h2>
            <p>
                You choosed to visit
                <sapn 
                    style={{ 
                        color: 'var(--black)', 
                        fontWeight: 'bold' 
                    }}
                > { selectedPlace }</sapn>
            </p>
            <div className='selection'>
                {
                    selectedActivities.map(activity => (
                        <p key={ activity }>{ activity }</p>
                    ))
                }
            </div>
        </div>
    );
};

export default Step3;