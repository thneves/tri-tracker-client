const dateFormatForChart = day => {
  const d = new Date(day);

  const year = d.getFullYear();

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];

  const formatted = `${monthName} ${year}`;

  return formatted;
};

export default dateFormatForChart;
