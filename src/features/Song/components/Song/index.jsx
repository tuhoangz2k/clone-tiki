import React from 'react';
import './styles.scss'
function Song({song}) {
    return (
        <li className='song'>
            <div className='song__thumbnai'>

            <img src={song.thumbnailUrl} alt={song.name}/>
            </div>
            <p className='song__name'>{song.name}</p>
        </li>
    );
}

export default Song;