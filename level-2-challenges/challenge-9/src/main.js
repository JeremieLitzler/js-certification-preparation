// complete the challenge here 👇

// 1. Star Counter

export function createStarCounter(initialValue) {
  let _counter = initialValue;
  const increment = () => _counter++;
  const decrement = () => _counter--;
  const getValue = () => _counter;
  return {
    getValue,
    increment,
    decrement,
  };
}

const starCounter = createStarCounter(3);
starCounter.increment();
starCounter.increment();
starCounter.decrement();
starCounter.decrement();
starCounter.decrement();

const starContainer = document.querySelector('#starContainer');
const starCount = starCounter.getValue();
for (let i = 0; i < starCount; i++) {
  const star = document.createElement('img');
  star.src = '/star.svg';
  star.alt = 'star';
  star.classList.add('star');
  starContainer.appendChild(star);
}

// 2. Cosmic Signal Broadcaster
const signalBroadcaster = document.querySelector('#signalBroadcaster');
export function broadcastSignals() {
  // replacing var avec let solves the issue...
  // but the topic is IIFE...
  for (let i = 1; i <= 5; i++) {
    // (function (i) { // using IIFE
    setTimeout(() => {
      console.log('i is ', i);

      signalBroadcaster.classList.add(`signal-${i}`);
      if (i > 1) {
        signalBroadcaster.classList.remove(`signal-${i - 1}`);
      }
    }, i * 500);
    // })(i);
  }
}

broadcastSignals();

// 3. Function Chain: Cosmic Adjuster
const planets = document.querySelector('#planets');
const rockets = document.querySelector('#rockets');
const airships = document.querySelector('#airships');

function createItem(container, count) {
  for (let i = 0; i < count; i++) {
    const planet = document.createElement('span');
    container.appendChild(planet);
  }
}

export function createCosmicAdjuster(initialState) {
  const _addSpan = () => {
    const domElement = document.createElement('span');
    return domElement;
  };
  const _makeElements = (amount) => {
    const spans = [];
    for (let index = 0; index < amount; index++) {
      spans.push(_addSpan());
    }
    return spans;
  };

  class Adjuster {
    constructor(initialState) {
      const {
        rockets: _rocketsInit,
        planets: _planetsInit,
        airships: _airShipsInit,
      } = { ...initialState };
      this._rocketsInit = _rocketsInit;
      this._planetsInit = _planetsInit;
      this._airShipsInit = _airShipsInit;
    }
    addRockets = (amount) => {
      rockets.replaceChildren(..._makeElements(amount + this._rocketsInit));
      return this;
    };
    addPlanets = (amount) => {
      planets.replaceChildren(..._makeElements(amount + this._planetsInit));
      return this;
    };
    addAirships = (amount) => {
      airships.replaceChildren(..._makeElements(amount + this._airShipsInit));
      return this;
    };
  }
  return new Adjuster(initialState);
}

const adjuster = createCosmicAdjuster({ rockets: 1, planets: 2, airships: 3 });
console.log(typeof adjuster);

adjuster.addRockets(5).addPlanets(3).addAirships(1);
