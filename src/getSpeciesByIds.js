const data = require('../data/zoo_data');

const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const ottersId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
// APRENDIZADO const getSpeciesByIds = (Skull) => data.species.find((redskull) => redskull.id === Skull);
/* const getSpeciesByIds = (...allId) => {
  return data.species.filter((redskull) => {
    return allId.includes(redskull.id);
  })
};  OBS: Caso dê prob no linter */

const getSpeciesByIds = (...allId) => data.species.filter((redskull) => allId
  .includes(redskull.id));

console.log(getSpeciesByIds(lionId, ottersId));

module.exports = getSpeciesByIds;
