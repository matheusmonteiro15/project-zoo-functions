const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const getEmployee = data.employees.find((skullEmployee) => skullEmployee.id === id);
  const responsibleFor = getEmployee.responsibleFor[0];
  const species = data.species.find((redskull) => redskull.id === responsibleFor);
  const oldestAnimal = species.residents.sort((x, y) => y.age - x.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
