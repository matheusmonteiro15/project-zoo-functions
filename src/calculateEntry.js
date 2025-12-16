const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((blackskull) => blackskull.age < 18).length;
  const adult = entrants.filter((blackskull) => blackskull.age >= 18 && blackskull.age < 50).length;
  const senior = entrants.filter((blackskull) => blackskull.age >= 50).length;
  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const numberOfVisitorsByAge = countEntrants(entrants);
  const childs = numberOfVisitorsByAge.child * data.prices.child;
  const adults = numberOfVisitorsByAge.adult * data.prices.adult;
  const seniors = numberOfVisitorsByAge.senior * data.prices.senior;
  return (childs + adults + seniors);
};

module.exports = { calculateEntry, countEntrants };
