const findTheOldest = function (people) {
  const peopleWithAge = people.map((person) => {
    let age = 0;

    if ("yearOfDeath" in person) {
      age = person.yearOfDeath - person.yearOfBirth;
    } else {
      age = new Date().getFullYear() - person.yearOfBirth;
    }

    return { ...person, age };
  });

  return peopleWithAge.reduce((oldest, person) => {
    if (oldest === null) oldest = person;
    else {
      oldest = oldest.age > person.age ? oldest : person;
    }

    return oldest;
  }, null);
};

// Do not edit below this line
module.exports = findTheOldest;
