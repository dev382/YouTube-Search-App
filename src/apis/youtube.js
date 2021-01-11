import axios from 'axios';

const KEY = 'AIzaSyDyCzf1iYLzE02TMVTUcibHmpUtE9LQUUI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
