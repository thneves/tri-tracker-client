const dateFormat = day => {
  const d = new Date(day);

  const year = d.getFullYear();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];

  const formatted = `${monthName} ${year}`;

  return formatted;
};

export default dateFormat;
