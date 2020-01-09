const R = require("ramda");

const x = R.replace("name", R.__, "Hello, name!");
const tasks = [
  {
    id: 1,
    complete: true
  },
  {
    id: 2,
    complete: false
  },
  {
    id: 3,
    complete: false
  },
  {
    id: 4,
    complete: false
  }
];

const incomplete = R.filter(R.whereEq({ complete: false }));
// const taken = R.pipe(R.take(2), incomplete, R.project(["complete"]));
const taken = R.compose(R.take(2), incomplete, R.project(["complete"]));

console.log(taken(tasks));

// R.multiply(2, 10);

// const multiplyByTwo = R.multiply(2);

// console.log(multiplyByTwo(5));
