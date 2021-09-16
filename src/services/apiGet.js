import axios from 'axios';

const getTracks = async () => {
  const response = await axios.get('https://tracker-server.herokuapp.com/api/v1/tracks', { withCredentials: true });

  if (response.status === 200) {
    const requestedTracks = response.data.tracks;
    return requestedTracks;
  }

  throw Error(response.status);
};

export default getTracks;
