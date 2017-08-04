import React from 'react';

//  the reason we choose functional component over class-based component is we don't use state in thsi component

const VideoDetail = ({video}) => {
    if (!video){
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`; // the two syntax are the same

    return(
        <div className="video-detail col-md-8">

            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} allowFullScreen="allowfullscreen"></iframe>
            </div>

            <div className="details">
                <h6>{video.snippet.title}</h6>
                <p>{video.snippet.description}</p>
            </div>

        </div>
    );
}
export default VideoDetail;
