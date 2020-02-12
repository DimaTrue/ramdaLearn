const R = require("ramda");

const user = {
  name: "Jhon",
  surname: "Flint"
};

const nameLens = R.lens(R.prop("name"), R.assoc("name"));

// const nameLens = R.lensProp("name"); // same as upper

const name = R.view(nameLens, user); // receive user.name
const upperName = R.toUpper(name); // toUpperCase
const result = R.set(nameLens, upperName, user); // set new value to user.name

// const result = R.over(nameLens, R.toUpper, user); // same as code upper

console.log("result", result);
