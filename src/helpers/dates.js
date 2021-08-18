const dateFormat = day => {
  const d = new Date(day);

  const year = d.getFullYear();
  const date = d.getDate();

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

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];
  const dayIndex = d.getDay();
  const dayName = days[dayIndex];

  const formatted = `${dayName}, ${date} ${monthName} ${year}`;
  return formatted;
};

export default dateFormat;
