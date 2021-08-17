import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import dateFormat from '../helpers/dateChart';
import { options, data } from '../helpers/chartOptions';
import Logout from '../containers/Logout';
import Navbar from './Navbar';
import '../styles/components/Progress.scss';

const PieChart = () => {
  const allTracks = useSelector(state => state.allTracks.tracks);
  let dateArray = [];

  allTracks.map(track => dateArray.push(dateFormat(track.day)));

  console.log(dateArray);

  dateArray = dateArray.filter((item, index) => dateArray.indexOf(item) === index);

  console.log(dateArray);

  return (
    <div className="container">
      <Logout />
      <div className="progress-div">
        <h1>Chart test</h1>
        <Bar
          className="pie-chart"
          data={data}
          options={options}
        />
      </div>
      <Navbar />
    </div>
  );
};

export default PieChart;
