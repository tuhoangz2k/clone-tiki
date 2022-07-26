import React from 'react';
import SongList from './components/SongList';

function SongFeature(props) {
    const songs=[
        {
            id:1,
            name:'US-UK Today\'s Top Hits',
            thumbnailUrl:'https://photo-zmp3.zmdcdn.me/banner/4/d/4/6/4d46712a5a944962f4350ff18ae0d6bf.jpg'
        },
        {
            id:2,
            name:'Thanh Âm Sáng Tạo',
            thumbnailUrl:'https://photo-zmp3.zmdcdn.me/banner/3/7/9/c/379c0075caf4fe8da27a39dfdf5de558.jpg'
        },
        {
            id:3,
            name:'Đi Đâu Cũng Nghe',
            thumbnailUrl:'https://photo-zmp3.zmdcdn.me/banner/6/e/7/2/6e72f1f66aaf84293953d113785711cb.jpg'
        },
    ]
    return (
        <div>
            <SongList songList={songs}/>
        </div>
    );
}

export default SongFeature;