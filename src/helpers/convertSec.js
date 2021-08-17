const converSec = time => {
  const sec = Number(time);
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - (hours * 3600)) / 60);
  let seconds = sec - (hours * 3600) - (minutes * 60);

  if (hours < 10) { hours = `0${hours}`; }
  if (minutes < 10) { minutes = `0${minutes}`; }
  if (seconds < 10) { seconds = `0${seconds}`; }

  const result = `${hours}:${minutes}:${seconds}`;

  return result;
};

const convertMin = (h, m, s) => {
  const hour = Number(h);
  const min = Number(m);
  const sec1 = Number(s);

  const sec2 = hour * 3600;
  const sec3 = min * 60;

  const result = sec1 + sec2 + sec3;

  return result;
};

export { converSec, convertMin };
