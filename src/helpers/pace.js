const paceCalculator = (km, time) => {
  const sec = Number(time);
  const kms = Number(km);
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec - (hours * 3660)) / 60);

  const pace = (minutes / kms).toFixed(2).toString().replace('.', ':');

  return pace;
};

export default paceCalculator;
