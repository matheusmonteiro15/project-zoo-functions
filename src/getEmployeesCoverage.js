const data = require('../data/zoo_data');

const getSpecie = data.species.map(({ id, name, location }) => ({ id, name, location }));

const getEmployee = () => data.employees.map((skullEmployee) => {
  const allEmployee = {
    id: skullEmployee.id,
    fullName: `${skullEmployee.firstName} ${skullEmployee.lastName}`,
    species: getSpecie.filter(({ id }) => skullEmployee.responsibleFor
      .includes(id)).map((gta) => gta.name),
    locations: getSpecie.filter(({ id }) => skullEmployee.responsibleFor
      .includes(id)).map((gta2) => gta2.location),
  };
  return allEmployee;
});

const getEmployeesCoverage = (skullEmployee) => {
  if (!skullEmployee) {
    return getEmployee();
  }
  const filterEmployee = getEmployee().find(({ id, fullName }) =>
    (fullName.includes(skullEmployee.name) || id.includes(skullEmployee.id)));

  if (filterEmployee) {
    return filterEmployee;
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
