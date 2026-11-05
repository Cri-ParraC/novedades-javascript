let count = 1;
count = 2;
console.log(count); // => 2

const PI = 3.14;
// PI = 3; // TypeError: Assignment to constant variable.

if (true) {
  let blockScoped = 'inside';
}
// console.log(blockScoped); // ReferenceError: blockScoped is not defined
