import React from 'react';

const Api = () => {
  const checkLoginStatus = () => {
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then(response => {
        console.log('logged in?', response.data);
      }).catch(error => {
        console.log('login error', error);
      });
  };

  const handleLogout = () => {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log('logout error', error);
      });
  };

  const handleChange = e => {
    setTrack({
      ...track,
      [e.target.name]: e.target.value,
    });
    console.log(track);
  };

  const handleDeleteTrack = () => {
    console.log('oi');
    axios.delete('http://localhost:3001/api/v1/tracks/5',
      { withCredentials: true }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log('delete error', error);
    });
  };

  const handleUserTracks = () => {
    // e.preventDefault();
    console.log('oi');
    axios.get('http://localhost:3001/api/v1/tracks/',
      { withCredentials: true }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log('error', error);
    });
  };

  const handleShowTrack = id => {
    axios.get(`http://localhost:3001/api/v1/tracks/${id}`,
      { withCredentials: true }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log('show track', error);
    });
  };

  const handleSubmitTrack = e => {
    axios.post('http://localhost:3001/api/v1/tracks', {
      track: {
        user_id: track.user_id,
        sport: track.sport,
        day: track.day,
        distance: track.distance,
        moving_time: track.moving_time,
      },
    },
    { withCredentials: true }).then(response => {
      console.log('track response', response);
    }).catch(error => {
      console.log('error', error);
    });

    e.preventDefault();
  };

  return (
    <>
      <h1>olá</h1>
      <h1>Testing API Requests</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="sport" placeholder="Sport" value={track.sport} onChange={handleChange} required />
        <input type="date" name="day" placeholder="Date" value={track.day} onChange={handleChange} required />
        <input type="number" name="distance" placeholder="Distance" value={track.distance} onChange={handleChange} required />
        <input type="number" name="moving_time" placeholder="Moving Time" value={track.moving_time} onChange={handleChange} required />
        <button type="submit"> Create Track</button>
      </form>
      <button type="button" onClick={handleUserTracks}>Show All User Tracks</button>
      <div>
        <h1>Track</h1>
        <h2>Run</h2>
        <h3>Sun, 10 Sep 2021</h3>
        <h4>10km</h4>
        <h4>01:40:23 - moving time</h4>
        <button type="button" onClick={() => handleShowTrack(5)}>Show One Track</button>
      </div>
      <button type="button" onClick={handleDeleteTrack}>Delete One Track</button>
    </>
  );
};
