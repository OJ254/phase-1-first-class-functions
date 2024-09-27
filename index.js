// Function that receives a callback function and calls it
const receivesAFunction = (callback) => {
  callback();
};

// Function that returns a named function
const returnsANamedFunction = () => {
  function namedFunction() {
    console.log("This is a named function");
  }
  return namedFunction;
};

// Function that returns an anonymous function
const returnsAnAnonymousFunction = () => {
  return function () {
    console.log("This is an anonymous function");
  };
};
