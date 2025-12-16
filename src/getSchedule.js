const data = require('../data/zoo_data');

const skullValidation = (scheduleTarget) => {
  const getDays = Object.keys(data.hours).reduce((prev, curr) => {
    prev[curr] = {
      officeHour: `Open from ${data.hours[curr].open}am until ${data.hours[curr].close}pm`,
      exhibition: data.species.filter((redskull) => redskull.availability.includes(curr))
        .map((nameAnimal) => nameAnimal.name),
    };
    return prev;
  }, {});

  getDays.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };

  return getDays;
};

const getSchedule = (scheduleTarget) => {
  const hours = Object.keys(data.hours);
  if (scheduleTarget === undefined) {
    return skullValidation();
  }
  const macthSpecie = data.species.some((redskull) => redskull.name === scheduleTarget);
  if (!macthSpecie && !hours.includes(scheduleTarget)) {
    return skullValidation();
  }
  if (hours.includes(scheduleTarget)) {
    return { [scheduleTarget]: skullValidation()[scheduleTarget] };
  }
  const matchName = data.species.find((redskull) => redskull.name === scheduleTarget);
  return matchName.availability;
};

/* Gus disse no YT, em seu canal, que era boa prática colocar no parâmetro no singular. No caso, "specie".
Venho utilizado no entanto "redskull" pra (1) n confundir com o objeto "species", por ser (2) uma palavra
familiar e (3) estimular meu cérebro pra lembrar. Mas, no dia a dia lembrar que n faço código apenas para
mim!!!! */

module.exports = getSchedule;
