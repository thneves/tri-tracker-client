import axios from 'axios';

const deleteSession = async () => {
  const response = await axios.delete('https://tracker-server.herokuapp.com/logout', { withCredentials: true });

  if (response.status === 200) {
    const logoutUser = response.data.logged_out;
    return logoutUser;
  }

  throw Error(response.status);
};

export default deleteSession;
