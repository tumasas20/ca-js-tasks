const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  function peopleInRows(person) {
    console.log(`${person.name}`,
      `${person.surname}`,
      `${person.sex}`,
      `${person.age}`,
      `${person.income}`,
      `${person.married}`,
      `${person.hasCar}`);
  }
  people.forEach(peopleInRows)
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu');
{
  function namesAndSurnames(people) {
    console.log(`${people.name}`, '-', `${people.surname}`)
  }
  people.forEach(namesAndSurnames);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  function namesSurnamesAndStatus(people) {
    console.log(`${people.name}`, '-', `${people.surname},`, 'married:', `${people.married}`)
  }
  people.forEach(namesSurnamesAndStatus);
}
console.groupEnd();

console.groupCollapsed('4. Sukurkite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  function sexAndIncome(person) {
    return {
      sex: person.sex,
      income: person.income
    }
  }
  const newArr = people.map(sexAndIncome);
  console.log(newArr);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  function namesSurnamesSex(person) {
    return {
      name: person.name,
      surname: person.surname,
      sex: person.sex
    }
  }
  const newArr = people.map(namesSurnamesSex);
  console.log(newArr);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  function isMale(person) {
    return person.sex === 'male';
  }
  const personIsMale = people.filter(isMale);
  console.log(personIsMale);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  function isFemale(person) {
    return person.sex === 'female';
  }
  const personIsFemale = people.filter(isFemale);
  console.log(personIsFemale);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function isHaveCar(person) {
    return person.hasCar;
  }
  const haveCar = people.filter(isHaveCar);
  console.log(haveCar);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function isMarried(person) {
    return person.married === true;
  }
  const personMarried = people.filter(isMarried);
  console.log(personMarried);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  function personsHasCarCalculate(person) {
    return person.hasCar === true && `${person.sex}`
  }
  const personWhoDrives = people.map(personsHasCarCalculate);
  console.log(personWhoDrives);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  function incomeToSalary(person) {
    return {
      name: person.name,
      surname: person.surname,
      sex: person.sex,
      age: person.age,
      salary: person.income,
      married: person.married,
      hasCar: person.hasCar
    }
  }
  const incomeChagedToSalary = people.map(incomeToSalary);
  console.log(incomeChagedToSalary);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  function noSexNameAndSurname(person) {
    return {
      age: person.age,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar
    }
  }
  const newArr = people.map(noSexNameAndSurname);
  console.log(newArr);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  function chageNametoFullname(person) {
    return {
      fullname:
        [
          person.name,
          person.surname],
      sex: person.sex,
      age: person.age,
      salary: person.income,
      married: person.married,
      hasCar: person.hasCar
    }
  }
  const nameIsFullname = people.map(chageNametoFullname);
  console.log(nameIsFullname);
}
console.groupEnd();

