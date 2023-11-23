import axios from 'axios';

const postRegistration = async (name, email, password, passwordConfirmation) => {
  const response = await axios.post('http://localhost:3001/signup', {
    user: {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    },
  }, { withCredentials: false });

  if (response.status === 200) {
    const registeredUser = [response.data.user, response.data.logged_in];
    return registeredUser;
  }

  throw Error(response.status);
};

const postLogin = async (email, password) => {
  const response = await axios.post('http://localhost:3001/login', {
    user: {
      email,
      password,
    },
  }, { withCredentials: false });

  if (response.status === 200) {
    if (response.data.logged_in) {
      const loggedUser = [response.data.user, response.data.logged_in];
      return loggedUser;
    }
  }

  return response.data.status;
};

const postTrack = async (userId, sport, day, distance, movingTime) => {
  const response = await axios.post('http://localhost:3001/tracks', {
    track: {
      user_id: userId,
      sport,
      day,
      distance,
      moving_time: movingTime,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  }, { withCredentials: false });

  if (response.status === 200) {
    const trackCreated = response.data.track;
    return trackCreated;
  }

  throw Error(response.status);
};

export { postRegistration, postTrack, postLogin };
