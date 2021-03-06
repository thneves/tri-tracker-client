import axios from 'axios';

const getTracks = async () => {
  const response = await axios.get('https://tracker-server.herokuapp.com/tracks', { withCredentials: true });

  if (response.status === 200) {
    const requestedTracks = response.data.tracks;
    return requestedTracks;
  }

  throw Error(response.status);
};

const getLoggedUser = async () => {
  const response = await axios.get('https://tracker-server.herokuapp.com/logged_in');

  if (response.status === 200) {
    const requestedUser = response.data;
    return requestedUser;
  }

  throw Error(response.status);
};

export { getTracks, getLoggedUser };
