import axios from 'axios';

const postRegistration = async (username, email, password, passwordConfirmation) => {
  const response = await axios.post('http://localhost:3001/registrations', {
    user: {
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    },
  },
  { withCredentials: true });

  if (response.status === 200) {
    const registeredUser = response.data.user;
    return registeredUser;
  }

  throw Error(response.status);
};

const postLogin = async (email, password) => {
  const response = await axios.post('http://localhost:3001/sessions', {
    user: {
      email,
      password,
    },
  }, { withCredentials: true });

  if (response.status === 200) {
    const loggedUser = response.data.user;
    return loggedUser;
  }

  throw Error(response.status);
};

const postTrack = async (userId, sport, day, distance, movingTime) => {
  const response = await axios.post('http://localhost:3001/api/v1/tracks', {
    track: {
      user_id: userId,
      sport,
      day,
      distance,
      moving_time: movingTime,
    },
  },
  { withCredentials: true });

  if (response.status === 200) {
    const trackCreated = response.data.track;
    return trackCreated;
  }

  throw Error(response.status);
};

export { postRegistration, postLogin, postTrack };