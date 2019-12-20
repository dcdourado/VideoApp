import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import Video from "./Video";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => onTermSubmit("buildings"), []);

    const onTermSubmit = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        })
        .catch(err => console.log(err));

        let responseVideos = response.data.items;
        setSelectedVideo(responseVideos[0]);
        responseVideos.shift();
        setVideos(responseVideos);
    };

    const onVideoSelect = video => setSelectedVideo(video);

    return(
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <Video video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;