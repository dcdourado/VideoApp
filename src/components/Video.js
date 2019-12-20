import React from "react";

const Video = props => {
    const { video } = props;

    if (!video) {
        return null;
    }

    const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} frameBorder="0"></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default Video;