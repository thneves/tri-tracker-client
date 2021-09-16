import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import fetchAllTracks from '../redux/thunk/thunkGet';
import dateFormatForChart from '../helpers/dateChart';
import Chart from '../components/Chart';
import Logout from './Logout';
import Navbar from '../components/Navbar';
import '../styles/components/Progress.scss';

const Progress = () => {
  const allTracks = useSelector(state => state.allTracks.tracks);
  const isLogged = useSelector(state => state.login.valid);
  const logRegister = useSelector(state => state.register.valid);
  const dateArray = [];
  let onlyDates = [];

  useEffect(() => {
    fetchAllTracks();
  }, [fetchAllTracks]);

  if (!isLogged && !logRegister) {
    return <Redirect to="/" />;
  }

  if (allTracks.length > 0) {
    allTracks.map(track => onlyDates.push(dateFormatForChart(track.day)));
  }

  if (allTracks.length > 0) {
    allTracks.map(track => dateArray.push([dateFormatForChart(track.day), track.sport]));
  }

  onlyDates = onlyDates.filter((item, index) => onlyDates.indexOf(item) === index);
  const runningLabel = new Array(onlyDates.length).fill(0);
  const swimLabel = new Array(onlyDates.length).fill(0);
  const cyclingLabel = new Array(onlyDates.length).fill(0);

  onlyDates.forEach((date, index) => {
    dateArray.forEach(date2 => {
      if (date === date2[0]) {
        const sport = date2[1];
        if (sport === 'swim') {
          swimLabel[index] += 1;
        } else if (sport === 'running') {
          runningLabel[index] += 1;
        } else if (sport === 'cycling') {
          cyclingLabel[index] += 1;
        }
      }
    });
  });

  return (
    <div className="container">
      <Logout text="Keep it up!" />
      <div className="progress-div">
        <h3>Your progress</h3>
        <Chart
          months={onlyDates}
          runnings={runningLabel}
          swimmings={swimLabel}
          cyclings={cyclingLabel}
        />
      </div>
      <Navbar />
    </div>
  );
};

export default Progress;
