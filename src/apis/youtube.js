import axios from "axios";


const KEY = "AIzaSyCVtEczJCAmi13WbHRCYm1ji6WyUKM0vME";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});

