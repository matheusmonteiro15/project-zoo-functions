const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return data.employees
    .find((redName) => redName.firstName === employeeName || redName.lastName === employeeName);
};

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
