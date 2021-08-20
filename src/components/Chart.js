import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import options from '../helpers/chartOptions';

const Chart = ({
  months, runnings, swimmings, cyclings,
}) => {
  const data = {
    labels: months,
    datasets: [
      {
        label: '# Runnings',
        data: runnings,
        backgroundColor: [
          'rgba(0, 186, 255, 1)',
        ],
        borderColor: [
          'rgba(0, 186, 255, 1)',

        ],
        borderWidth: 1,
      },
      {
        label: '# Cycling',
        data: cyclings,
        backgroundColor: [
          'rgba(19, 59, 74, 1)',
        ],
        borderColor: [
          'rgba(19, 59, 74, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: '# Swimmings',
        data: swimmings,
        backgroundColor: [
          'rgba(9, 80, 188, 1)',
        ],
        borderColor: [
          'rgba(9, 80, 188, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={options}
      height={80}
      width={160}
    />
  );
};

Chart.propTypes = {
  months: PropTypes.instanceOf(Array).isRequired,
  runnings: PropTypes.instanceOf(Array).isRequired,
  swimmings: PropTypes.instanceOf(Array).isRequired,
  cyclings: PropTypes.instanceOf(Array).isRequired,
};

export default Chart;
