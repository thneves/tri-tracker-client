import axios from 'axios';

const getTracks = async () => {
  const response = await axios.get('http://localhost:3001/api/v1/tracks', {
    headers: {
      'Content-Type': 'application/json',
    },
  },
  { withCredentials: true });

  if (response.status === 200) {
    const requestedTracks = response.data.tracks;
    return requestedTracks;
  }

  throw Error(response.status);
};

const getLoggedUser = async () => {
  const response = await axios.get('http://localhost:3001/logged_in');

  if (response.status === 200) {
    const requestedUser = response.data;
    return requestedUser;
  }

  throw Error(response.status);
};

export { getTracks, getLoggedUser };
