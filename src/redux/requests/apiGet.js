import axios from 'axios';

const getTracks = async () => {
  const response = await axios.get('http://localhost:3001/api/v1/tracks/',
    { withCredentials: true });

  if (response.status === 200) {
    const requestedTracks = response.data.tracks;
    return requestedTracks;
  }

  throw Error(response.status);
};

const getOneTrack = () => console.log('oi');

export { getTracks, getOneTrack };
