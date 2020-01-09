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

// const add = (a, b) => a + b;

// // console.log(add(1, 2, "ignore")); // 3

// const curriedAdd = curry(add);

// console.log(curriedAdd(1)(2));
//////////////////////////////////////////////////////////////////////////////////////////////////

// const objects = [
//   {
//     id: 1
//   },
//   {
//     id: 2
//   },
//   {
//     id: 3
//   }
// ];

// // const result = objects.map(obj => obj.id);

// const get = curry((property, object) => {
//   return object[property];
// });

// // const result = objects.map(get("id"));

// // const getIds = function(objects) {
// //   return objects.map(get("id"));
// // };

// const map = curry(function(fn, values) {
//   return values.map(fn);
// });

// const getIds = map(get("id"));

// console.log(getIds(objects));
//////////////////////////////////////////////////////////////////////

const fetchFromServer = function() {
  return new Promise(function(resolve) {
    resolve({
      user: "Jack",
      posts: [
        {
          title: "why curry?"
        },
        {
          title: "functional programming"
        }
      ]
    });
  });
};

// fetchFromServer()
//   .then(data => data.posts)
//   .then(posts => posts.map(post => post.title))
//   .then(titles => console.log("titles", titles));

const get = curry((property, object) => {
  return object[property];
});

const map = curry(function(fn, values) {
  return values.map(fn);
});

fetchFromServer()
  .then(get("posts"))
  .then(map(get("title")))
  .then(titles => console.log("titles", titles));
