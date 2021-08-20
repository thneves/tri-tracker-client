import React from 'react';
import renderer from 'react-test-renderer';
import Chart from '../../components/Chart';

const months = ['Mar 2048', 'Dec 2034', 'Sep 2035'];
const runs = [1, 1, 1];
const swims = [1, 2, 4];
const cyclings = [2, 2, 2];

it('Should render the Chart component', () => {
  const chart = renderer
    .create(
      <Chart
        months={months}
        runnings={runs}
        swimmings={swims}
        cyclings={cyclings}
      />,
    ).toJSON();

  expect(chart).toMatchSnapshot();
});
