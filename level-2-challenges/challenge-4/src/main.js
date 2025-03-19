// complete the challenge here 👇

// 1. Discover the Enchanted Scroll
const scroll = document.getElementById('scroll');
console.log(scroll);

// 2. Decipher the Ancient Spell
const scrollTextContent = scroll.textContent;
console.log(scrollTextContent);

// 3. Rewrite the Spell
scroll.textContent = 'Abracadabra!';

// 4. Reveal the Magic Attribute
const dataMagic = scroll.dataset.magic;
console.log(dataMagic);

// 5. Enchant the Scroll's Appearance
scroll.style.color = 'blue';

// 6. Bestow a Magical Class
scroll.classList.add('enchanted');

// 7. End the Game with a Magical Finale
const p = document.createElement('p');
p.innerText = 'Congratulations! You have mastered the DOM Magic!';
p.setAttribute('id', 'msg');
p.setAttribute('data-magic', 'finale');
p.style.backgroundColor = 'green';
p.style.color = 'white';
document.body.append(p);
