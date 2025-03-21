// complete the challenge here 👇

import { pikachu, charmander, newSkills } from '../public/data';
import {
  renderPetPetAttributes,
  renderPetHealthIndex,
  renderSkillList,
  renderPetProtectionStatus,
  renderBlazeAbilityExist,
} from './render';

// 1. Pet Attribute List
export function listPetAttributes(pet) {
  return Object.keys(pet);
}

renderPetPetAttributes(listPetAttributes(pikachu));

// 2. Pet Health Index Calculation
export function calculatePetHealth(petStatus) {
  console.log(petStatus);
  const healthAttrCount = Object.keys(petStatus).length;
  console.log('calculatePetHealth', healthAttrCount);
  const healthAttrs = Object.values(petStatus);
  console.log('calculatePetHealth', healthAttrs);
  const healthIndex =
    healthAttrs.reduce(
      (healthIndexSum, healthAttr) => healthIndexSum + healthAttr,
      0
    ) / healthAttrCount;
  console.log('calculatePetHealth', healthIndex);
  return healthIndex;
}

renderPetHealthIndex(calculatePetHealth(charmander.status));

// 3. Pet Skill Upgrade
export function upgradePetSkills(currentSkills, newSkills) {
  return Object.assign(newSkills, currentSkills);
}

renderSkillList(upgradePetSkills(pikachu.skills, newSkills));

// 4. Rare Pet Protection
export function protectRarePet(rarePet) {
  return Object.freeze(rarePet);
}

renderPetProtectionStatus(protectRarePet(pikachu));

// 5. Pet Special Ability Check
export function checkSpecialAbility(pet, abilityName) {
  return Object.hasOwn(pet, abilityName);
}

renderBlazeAbilityExist(checkSpecialAbility(charmander, 'blaze'));
