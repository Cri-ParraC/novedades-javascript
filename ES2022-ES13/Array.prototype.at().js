const numbers = [1, 2, 3, 4, 5];

// Before
console.log(numbers[numbers.length - 2]); // => 4

// Now
console.log(numbers.at(-2));              // => 4
