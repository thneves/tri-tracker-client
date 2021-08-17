const options = {
  indexAxis: 'x',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'All time activities number',
    },
  },
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
  datasets: [
    {
      label: '# Runnings',
      data: [10, 4.5, 5, 6, 7, 8, 12, 18],
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
      data: [13, 4.5, 5, 2, 5, 7, 8, 9],
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
      data: [13, 4.5, 5, 6, 8, 9, 10],
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

export { options, data };
