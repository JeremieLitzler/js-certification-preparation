// complete the challenge here 👇

// 1. Avoid the Enchanted Spider
const spiderWeb = document.querySelector('#spiderWeb');
spiderWeb.addEventListener('mouseover', (event) => {
  spiderWeb.classList.add('spider-web');
});
spiderWeb.addEventListener('mouseout', (event) => {
  spiderWeb.classList.remove('spider-web');
});

// 2. Activate Magic Portal
const magicPortalForm = document.querySelector('#magicPortalForm');
magicPortalForm.addEventListener('keydown', (event) => {
  console.dir(event);

  if (event.key.toLowerCase() === 'enter') {
    console.log('Magic Portal activated!');
  }
  event.preventDefault();
});

// 3. Track Fairy Movements
const fairy = document.querySelector('.fairy');
document.addEventListener('pointermove', (event) => {
  if (!event.ctrlKey) {
    fairy.style.visibility = 'hidden';
    return;
  }
  console.log('fairy.style', fairy.style);
  const fairyComputedStyle = window.getComputedStyle(fairy);

  //   console.log(
  //     `should move the fairy at x=${event.clientX}/y=${event.clientY}...`
  //   );
  fairy.style = { ...fairyComputedStyle };
  fairy.style.top = `${event.clientY}px`;
  fairy.style.left = `${event.clientX}px`;
});
document.addEventListener('pointercancel', (event) => {
  console.log('pointercancel');
});
document.addEventListener('keyup', (event) => {
  if (event.key.toLocaleLowerCase() === 'control') {
    console.log('ctrl lifted');

    fairy.style.visibility = 'hidden';
    event.stopPropagation();
  }
});
// 4. Summon Fireflies
const fireflyButton = document.querySelector('#fireflyButton');
fireflyButton.addEventListener('pointerdown', (event) => {
  fireflyButton.classList.add('firefly');
});
fireflyButton.addEventListener('pointerup', (event) => {
  fireflyButton.classList.remove('firefly');
});
// 5. Scroll through Ancient Scrolls
const tiger = document.querySelector('.tiger');
const scrollContainer = document.querySelector('#scrollContainer');
scrollContainer.addEventListener('scroll', (event) => {
  console.log(
    Math.abs(
      scrollContainer.scrollHeight -
        scrollContainer.clientHeight -
        scrollContainer.scrollTop
    ).toFixed(2),
    scrollContainer.scrollHeight.toFixed(2),
    scrollContainer.clientHeight.toFixed(2),
    scrollContainer.scrollTop.toFixed(2)
  );
  tiger.style.top = `${scrollContainer.scrollTop}px`;
});
// 6. Navigate through the Maze
const explorer = document.querySelector('.explorer');
document.addEventListener('keydown', (event) => {
  if (event.code.toLocaleLowerCase() === 'arrowup') {
    explorer.style.top = `${explorer.offsetTop - 10}px`;
  } else if (event.code.toLocaleLowerCase() === 'arrowdown') {
    explorer.style.top = `${explorer.offsetTop + 10}px`;
  } else if (event.code.toLocaleLowerCase() === 'arrowleft') {
    explorer.style.left = `${explorer.offsetLeft - 10}px`;
  } else if (event.code.toLocaleLowerCase() === 'arrowright') {
    explorer.style.left = `${explorer.offsetLeft + 10}px`;
  }
});

// 7. Detect Magical Creatures
const creatureDetector = document.querySelector('#creatureDetector');
creatureDetector.addEventListener('pointerover', (event) => {
  console.log('Magical creature detected!');
});
creatureDetector.addEventListener('pointerout', (event) => {
  console.log('Magical creature left!');
});
