import React from 'react';
import PropTypes from 'prop-types';
import Song from '../Song';
import './styles.scss'
SongList.propTypes = {
    songList:PropTypes.array.isRequired
};

function SongList({songList}) {
    return (
        <ul className="song-list">
            {songList.map((song)=>(<Song key={song.id} song={song}/>))}
        </ul>
    );
}

export default SongList;