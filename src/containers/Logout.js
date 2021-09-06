import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import deleteSession from '../services/apiDelete';
import { logoutRequest, logoutSuccess, logoutFailure } from '../redux/actions';
import '../styles/containers/Logout.scss';

const Logout = ({ text }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchLogout = () => {
    dispatch(logoutRequest());
    /* eslint-disable camelcase */
    const requestLogout = deleteSession();
    requestLogout.then(logged_out => {
      dispatch(logoutSuccess(logged_out));
      history.push('/');
    })
      .catch(error => {
        dispatch(logoutFailure(error.message));
        window.alert(error.message);
      });
  };

  const handleLogout = () => {
    fetchLogout();
  };

  return (
    <header className="logout-header">
      <h1>Tri Tracker</h1>
      <div>
        <h2>
          {text}
        </h2>
        <button className="logout-btn" type="button" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

Logout.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logout;
