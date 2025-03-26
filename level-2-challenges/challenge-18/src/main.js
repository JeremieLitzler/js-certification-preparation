export function main() {
  const timer = document.querySelector('#timer');
  const start = document.querySelector('#start');
  const reset = document.querySelector('#reset');
  const pause = document.querySelector('#pause');

  console.log(timer, start, reset, pause);

  let time = 0;
  let intervalId = null;
  const updateTimer = () => {
    const timerContent =
      time > 10 ? time.toString() : time.toString().padStart(2, 0);
    timer.textContent = timerContent;
  };
  const startFn = (event) => {
    updateTimer();
    start.style.display = 'none';
    pause.style.display = 'block';
    intervalId = setInterval(() => {
      time++;
      updateTimer();
    }, 1000);
  };
  const pauseFn = (event) => {
    clearInterval(intervalId);
    pause.style.display = 'none';
    start.style.display = 'block';
  };
  const resetFn = (event) => {
    time = 0;
    intervalId = null;
    updateTimer();
    clearInterval(intervalId);
  };
  start.addEventListener('click', startFn);
  pause.addEventListener('click', pauseFn);
  reset.addEventListener('click', resetFn);
}
