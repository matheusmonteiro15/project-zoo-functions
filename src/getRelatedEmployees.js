const data = require('../data/zoo_data');

const isManager = (id) => data.employees
  .some((skullEmployee) => skullEmployee.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const manager = data.employees
      .filter((skullEmployee) => skullEmployee.managers.includes(managerId));
    return manager.map((array) => `${array.firstName} ${array.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
