if (!true) {
  var example = 5;
}
console.log(example);
// var is using hoisting and it give output 5
// let is not using hoisting and it give output is not defined
// const is not using hoisting and it give output is not defined

const example1 = 8;
// example1 = 6; // this is what where we cannot change any value.
console.log(example1);

const example3 = []; // we can use array or list in const easily add item accordingly.
example3.push(5);
example3.push(5);
example3.push(6);
example3.push(5);
example3.push(5);
example3.push(5);
example3.push(5);
console.log(example3);
