const R = require("ramda");

// const truncate = str => {
//   let truncatedStr;

//   if (str.length > 10) {
//     truncatedStr = str.substring(0, 10);
//     truncatedStr = `${truncatedStr}...`;
//   } else {
//     truncatedStr = str;
//   }

//   return truncatedStr;
// };

const truncate = R.when(
  R.propSatisfies(R.gt(R.__, 10), "length"),
  R.compose(R.join(""), R.append("..."), R.take(10))
);

console.log(truncate("12345"));
console.log(truncate("12345678910"));
