const R = require("ramda");

const isValidAr = [6, 3, 4, 5, 2];

const isInvalidAr = [3, 4, 6, 1];

// const isFirstElementBiggest = elements =>
//   elements[0] === elements.sort((a, b) => b - a)[0];

const sortByBiggestFirst = R.sort(R.descend(R.identity));

const isFirstElementBiggest = R.converge(R.equals, [
  R.head,
  // elements => R.head(elements.sort((a, b) => b - a))
  // elements => R.head(R.sort(R.descend(R.identity))(elements))
  R.compose(R.head, sortByBiggestFirst)
]);

console.log(isFirstElementBiggest(isValidAr));
console.log(isFirstElementBiggest(isInvalidAr));
