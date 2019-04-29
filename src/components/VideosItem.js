import './VideosItem.css';
import React from 'react';




const VideosItems = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className='video-item item'>
            <img 
                className='ui image' 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title}>
            </img>
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    );
};


export default VideosItems;