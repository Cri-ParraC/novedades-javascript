const numbers = [1, 2, 3, 4, 5];

const find = numbers.find((number) => number % 2 === 0);
console.log(find); // => 2

const findLast = numbers.findLast((number) => number % 2 === 0); // Nuevo
console.log(findLast); // => 4