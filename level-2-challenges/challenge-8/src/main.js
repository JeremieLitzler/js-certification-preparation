// complete the challenge here 👇

// 1. Analyze Evidence

export function analyzeEvidence(array, callback, init = 0) {
  let sum = init;
  for (const element of array) {
    sum = callback(sum, element);
  }
  return sum;
}

const evidences = [2, 4, 6, 8];
const totalEvidence = analyzeEvidence(evidences, (acc, val) => acc + val, 0);
console.log('totalEvidence', totalEvidence);

// 2. Enhance Investigation Skills

export function createSkillEnhancer(n) {
  return (x) => n * x;
}

const doubleSkill = createSkillEnhancer(2);
console.log(doubleSkill(5));

// 3. Track Suspect Movements

export function trackMovements(locations, callback) {
  const timeoutIds = [];
  for (const location of locations) {
    const timeoutId = setTimeout(() => {
      callback(location);
    }, 200);
    timeoutIds.push(timeoutId);
  }
  //timeoutIds.forEach((intervalId) => clearInterval(intervalId));
}

const locations = ['Park', 'Mall', 'Cafe'];
trackMovements(locations, (location) => {
  console.log(`Suspect spotted at: ${location}`);
});

// 4. Combine Investigation Techniques

export function composeTechniques(callback1, callback2) {
  return (technique) => {
    const callback2Result = callback2(technique);
    const callback1Result = callback1(technique);

    const finalResult = `${callback2Result} ${callback1Result.replace(`${technique} `, '')}`;
    return finalResult;
  };
}

const addForensics = (x) => x + ' with Forensic Analysis';
const addInterrogation = (x) => x + ' with Interrogation';
const combinedTechnique = composeTechniques(addInterrogation, addForensics);
console.log(combinedTechnique('Investigation'));

// 5. Filter Suspect List

export function filterSuspects(suspects, predicate) {
  return suspects.filter((suspect) => predicate(suspect));
}

const suspects = [
  { name: 'Alice', age: 30, location: 'Park' },
  { name: 'Bob', age: 25, location: 'Mall' },
  { name: 'Charlie', age: 35, location: 'Cafe' },
];
const isAtPark = (suspect) => suspect.location === 'Park';
const suspectsAtPark = filterSuspects(suspects, isAtPark);
console.log(suspectsAtPark);
