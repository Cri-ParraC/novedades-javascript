const numbers = [1, 2, 3, 4, 5];

const find = numbers.findIndex((number) => number % 2 === 0);
console.log(find); // => 1

const findLast = numbers.findLastIndex((number) => number % 2 === 0); // Nuevo
console.log(findLast); // => 3