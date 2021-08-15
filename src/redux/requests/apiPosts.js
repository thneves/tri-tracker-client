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

const postLogin = () => { console.log('oi'); };

export { postRegistration, postLogin };
