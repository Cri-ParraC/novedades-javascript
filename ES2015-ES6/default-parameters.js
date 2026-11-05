function greet(name = 'Guest') {
  return `Hello, ${name}`;
}

console.log(greet()); // => Hello, Guest
console.log(greet('John')); // => Hello, John
