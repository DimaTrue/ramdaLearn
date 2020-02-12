const R = require('ramda');

// // const numbers = [1, 2, 3, 4];
// // const transducer = R.compose(R.map(R.add(1), R.take(2)));
// // R.transduce(transducer, R.flip(R.append), [], numbers);

// // const isOdd = x => x % 2 === 1;
// // const firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
// // console.log(R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)));
// const mapTransducer = (mapper) => (reducingFunction) => {
//   return (result, input) => reducingFunction(result, mapper(input));
// }
// const filterTransducer = (predicate) => (reducingFunction) => {
//   return (result, input) => predicate(input)
//     ? reducingFunction(result, input)
//     : result;
// }
// const concatReducer = (result, input) => result.concat(input);
// const lowerThan6 = filterTransducer((value) => value < 6);
// const double = mapTransducer((value) => value * 2);
// const numbers = [1, 2, 3];
// // Using Ramda's compose here
// const xform = R.compose(double, lowerThan6);
// const output = numbers.reduce(xform(concatReducer), []); // [2, 4]
// console.warn(output)
let autobots = ['Optimus Prime','Bumblebee','Ironhide','Sunstreaker','Ratchet'];

let transform = R.compose(
  R.filter(x => /r/i.test(x)),
  R.map(R.toUpper),
  R.map(R.reverse)
);

console.log(transform(autobots));
console.log(R.transduce(transform, R.flip(R.append), [], autobots))
