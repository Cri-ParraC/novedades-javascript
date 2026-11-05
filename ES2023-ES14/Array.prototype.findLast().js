const numbers = [1, 2, 3, 4, 5];

const firstEven = numbers.find((number) => number % 2 === 0);
console.log(firstEven); // => 2

const lastEven = numbers.findLast((number) => number % 2 === 0); // New
console.log(lastEven); // => 4
