const handleMouseOver = (event) => {
  // ..
};

const handleMouseLeave = (event) => {
  // ..
};

const handleInput = (event) => {
  // ..
};

const handleClick = () => {
  // ..
};

const addEventListeners = () => {
  const button = document.querySelector('#button');
  const input = document.querySelector('#nameInput');
  const nameParagraph = document.querySelector('#nameDisplay');
  button.addEventListener('mouseover', () => button.classList.add('hovered'));
  button.addEventListener('mouseenter', () => button.classList.add('hovered'));
  button.addEventListener('pointerover', () => button.classList.add('hovered'));
  button.addEventListener('mouseleave', () =>
    button.classList.remove('hovered')
  );
  button.addEventListener('mouseout', () => button.classList.remove('hovered'));
  button.addEventListener('pointerout', () =>
    button.classList.remove('hovered')
  );
  button.addEventListener('click', () => alert(`Hello, ${input.value}!`));
  input.addEventListener(
    'input',
    () => (nameParagraph.textContent = input.value)
  );
};

export const main = () => {
  addEventListeners();
};
