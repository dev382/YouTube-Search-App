import axios from 'axios';
import configData from "../config/default.json";

const KEY = configData.youTubeKey;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
