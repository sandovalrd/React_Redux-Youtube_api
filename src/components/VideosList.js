import React from 'react';
import VideosItem from './VideosItem';

const VideosList = ({videos, onVideoSelect}) => {
    const rederedList = videos.map( video =>{
        return (
            <VideosItem 
                video={video}
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
             />
        )
    });
    return <div className='ui relaxed divided list'>{rederedList}</div>;
};


export default VideosList;