const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const species = data.species.find((param) => param.name === (animal && animal.species));
  if (!species) {
    return data.species.reduce((prev, redskull) => ({
      ...prev,
      [redskull.name]: redskull.residents.length,
    }), {});
  }

  const { residents } = species;

  if (!animal || !animal.sex) {
    return residents.length;
  }
  return residents.filter((varao) => varao.sex === animal.sex).length;
};

console.log(countAnimals({ species: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
