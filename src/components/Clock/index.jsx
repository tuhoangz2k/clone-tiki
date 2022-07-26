import React from 'react';
import useClock from '../../hooks/useClock';

function Clock(props) {
    const {timeString}=useClock()
   
    return (
        <div className='clock'>
            {timeString}
        </div>
    );
}

export default Clock;