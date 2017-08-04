import React from 'react';


const VideoListItem = (props) => {

    if (!props.video){
        return <div>Loading...</div>
    }

    const video = props.video;
    const imageUrl = props.video.snippet.thumbnails.default.url;
    const onVideoSelect = props.onVideoSelect;

    return(
        <li onClick={() => onVideoSelect(video) } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt={video.snippet.title} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>

            </div>
        </li>);
}
export default VideoListItem;
