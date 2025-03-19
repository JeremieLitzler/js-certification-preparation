// complete the challenge here 👇

// 1. Initiate the Launch Sequence
const launchButton = document.querySelector('#launchButton');

launchButton.addEventListener('click', () => {
  const rocket = document.querySelector('.rocket');
  rocket.classList.add('launch');
});
// 2. Monitor the Control Input
const controlInput = document.querySelector('#controlInput');
controlInput.addEventListener('keydown', (event) => {
  console.log(event.key);
});
// 3. Track the Mouse Coordinates
document.addEventListener('mousemove', (event) => {
  const star = document.querySelector('.star');
  star.style.top = `${event.clientY}px`;
  star.style.left = `${event.clientX}px`;
});
// 4. Activate the Hyperdrive
const hyperdriveButton = document.querySelector('#hyperdriveButton');

hyperdriveButton.addEventListener('dblclick', () => {
  document.body.classList.add('hyperdrive');
});
