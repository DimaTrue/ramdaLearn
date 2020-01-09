const R = require("ramda");

// const arr = [1, 2, 3];

// const newArr = R.append(4, arr);

// console.log(arr);   // immutable data

// console.log(newArr);
//////////////////////////////////////////////////////////

// const users = [
//   {
//     id: 1,
//     name: "Jhon"
//   },
//   {
//     id: 2,
//     name: "Alex"
//   },
//   {
//     id: 3,
//     name: "Bill"
//   }
// ];

// // const alex = users.find(user => user.id === 2);

// // console.log(alex);

// // const test = R.propEq("id", 2, { id: 2 });

// const isAlex = R.propEq("id", 2);

// const alex = R.find(isAlex, users);

// console.log(alex);
/////////////////////////////////////////////////////////////////

// const wasBornInCountry = person => person.birthCountry === "UK";

// const wasNaturalized = person => Boolean(person.naturalizationDate);

// const isOver18 = person => person.age >= 18;

// const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person);

// const isEligibleToVote = person => isOver18(person) && isCitizen(person);

// const testUser = {
//   age: 20,
//   birthCountry: "UK"
// };

// console.log(isEligibleToVote(testUser));
////////////// SIMPLE JAVASCRIPT /////////////////////////////////////////////////

const wasBornInCountry = R.propEq("birthCountry", "UK");

const wasNaturalized = person => Boolean(person.naturalizationDate);

const isOver18 = person => person.age >= 18;

const isCitizen = R.either(wasBornInCountry, wasNaturalized);

const isEligibleToVote = R.both(isOver18, isCitizen);

const testUser = {
  age: 20,
  birthCountry: "UK"
};

console.log(isEligibleToVote(testUser));
