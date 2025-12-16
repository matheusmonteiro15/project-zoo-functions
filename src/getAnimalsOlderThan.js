const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const nameAnimal = data.species.find((redskull) => redskull.name === animal);
  const minimumAge = nameAnimal.residents.every((matusalem) => matusalem.age >= age);
  return minimumAge;
};

console.log(getAnimalsOlderThan('lions', 7));

module.exports = getAnimalsOlderThan;
