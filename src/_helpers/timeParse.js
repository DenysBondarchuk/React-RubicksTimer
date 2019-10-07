export const timeParse = (duration) => {
  let milliseconds = parseInt(((duration % 1000) / 10), 10);
  let seconds = parseInt(((duration / 1000) % 60), 10);
  let minutes = parseInt(((duration / (1000 * 60)) % 60), 10);
  let hours = parseInt(((duration / (1000 * 60 * 60)) % 24), 10);

  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;
  milliseconds = (milliseconds < 10) ? `0${milliseconds}` : milliseconds;

  hours = (hours <= 0) ? '' : `${hours}:`;
  minutes = (minutes <= 0) ? '' : `${minutes}:`;

  return `${hours}${minutes}${seconds}:${milliseconds}`;
};

export default timeParse;
