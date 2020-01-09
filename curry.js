const curry = fn => {
  const count = fn.length;

  return function f1(...args) {
    if (args.length >= count) {
      return fn(...args);
    } else {
      return function(...moreArgs) {
        const newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};

const add = (a, b, c) => {
  return a + b + c;
};

const curriedAdd = curry(add);

console.log(curriedAdd(1, 2)(3));

module.export = {
  curry
};
