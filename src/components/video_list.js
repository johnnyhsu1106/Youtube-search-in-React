import React from 'react';
import VideoListItem from './video_list_item'; // import VideoListItem so this class can be used.

// functional component
const VideoList = (props)=>{
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag} // use the key so no error shown up
                video={video} />
        );
    });

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );

}
export default VideoList;
