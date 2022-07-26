import React from 'react';
import './styles.scss'
import useMagicColor from '../../hooks/useMagicColor';
function MagicBox(props) {
    const {color}=useMagicColor()
    return (
        <div className='magic-box' style={{backgroundColor:color}}>
            
        </div>
    );
}

export default MagicBox;