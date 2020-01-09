function addTo(passed) {
  function add(inner) {
    return passed + inner;
  }
  return add;
}

const addThree = addTo(3);

console.log(addThree(2));

const addTwo = addTo(2);

console.log(addTwo(3));
