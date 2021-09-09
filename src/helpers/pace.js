const paceCalculator = (km, time) => {
  const sec = Number(time);
  const kms = Number(km);
  let minutes = Math.floor(sec / 60);

  if (minutes < 0) {
    minutes = 0;
  }

  const pace = (minutes / kms).toFixed(2).toString().replace('.', ':');

  return pace;
};

export default paceCalculator;
