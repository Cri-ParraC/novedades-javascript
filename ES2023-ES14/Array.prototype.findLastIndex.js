const numbers = [1, 2, 3, 4, 5];

const firstEvenIndex = numbers.findIndex((number) => number % 2 === 0);
console.log(firstEvenIndex); // => 1

const lastEvenIndex = numbers.findLastIndex((number) => number % 2 === 0); // New
console.log(lastEvenIndex); // => 3
