const user = { name: 'John', age: 30 };
const { name, age } = user;
console.log(name, age); // => John 30

const colors = ['red', 'green', 'blue'];
const [first, , third] = colors;
console.log(first, third); // => red blue
