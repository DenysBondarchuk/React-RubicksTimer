export const stopWatch = () => {

  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let time;

  const tick = () => {
    milliseconds++;
    if (milliseconds >= 100) {
      milliseconds = 0;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
    }

    time = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }
  
  const timer = () => {
    setInterval(tick, 10);
  }
  
  // timer();

  // return time;
}

export default stopWatch;