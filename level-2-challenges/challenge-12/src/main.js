// complete the challenge here 👇

import { pokemonData } from '../public/data';
import {
  displayTeamOverview,
  displayPokedex,
  displayChallengeResults,
} from './render';

// 1. Pokédex Update
export function updatePokedex(pokemonArray) {
  const newArray = pokemonArray.map((pokemon) => {
    pokemon['discoveredAt'] = Date.now();
    return pokemon;
  });
  console.log('updatePokedex', newArray);
  return newArray;
}

// 2. Type Filtering Master
const filterPredicate = (type) => ['Fire', 'Water', 'Grass'].includes(type);
export function filterByType(pokemonArray, type) {
  console.log('before', pokemonArray);
  const filteredArray = pokemonArray.filter((pokemon) =>
    filterPredicate(pokemon.type)
  );
  console.log('after', filteredArray);
  return filteredArray;
}

// 3. Team Power Assessment
export function calculateTeamPower(pokemonArray) {
  const powersList = pokemonArray.map((pokemon) => pokemon.power);
  console.log('calculateTeamPower', powersList);
  const result = powersList.reduce((next, sum) => sum + next, 0);
  return result;
}

// 4. Rare Pokémon Explorer
export function findRarePokemon(pokemonArray) {
  const rarePokemon = pokemonArray.find(
    (pokemon) => pokemon.rarity === 'Legendary'
  );
  console.log('findRarePokemon', rarePokemon);

  return rarePokemon;
}

// 5. Evolution Journey
export function evolveAllPokemon(pokemonArray) {
  console.log('evolveAllPokemon > before', [
    ...pokemonArray.map((pok) => Object.assign({}, pok)),
  ]);
  pokemonArray.forEach((pokemon) => {
    pokemon.level += 1;
    pokemon.power += 10;
  });
  console.log('evolveAllPokemon > after', pokemonArray);
}

const atOrBeyondLevel50Predicate = (pokemon) => pokemon.level >= 50;
// 6. Championship Challenge
export function readyForChampionship(pokemonArray) {
  console.log(
    pokemonArray.filter((pokemon) => atOrBeyondLevel50Predicate(pokemon))
  );
  const level50OrAbove = pokemonArray.every((pokemon) =>
    atOrBeyondLevel50Predicate(pokemon)
  );
  console.log('readyForChampionship', level50OrAbove);
  return level50OrAbove;
}

// You do not need to focus on and modify the following code
const _data = structuredClone(pokemonData);
// 2. Type Filtering Master
const fireType = filterByType(_data, 'Fire');
// 4. Rare Pokémon Explorer
const rarePokemon = findRarePokemon(_data);

displayChallengeResults(fireType, rarePokemon);
// 5. Evolution Journey
evolveAllPokemon(_data);
// 3. Team Power Assessment
const teamPower = calculateTeamPower(_data);
// 6. Championship Challenge
const isReady = readyForChampionship(_data);

displayTeamOverview(_data, teamPower, isReady);
// 1. Pokédex Update
const updatedPokedex = updatePokedex(_data);

displayPokedex(updatedPokedex);
