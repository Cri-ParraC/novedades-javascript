const numbers = [1, 2, 3, NaN];

console.log(numbers.includes(2)); // => true
console.log(numbers.includes(5)); // => false
console.log(numbers.includes(NaN)); // => true
console.log(numbers.indexOf(NaN) !== -1); // => false (the old way misses NaN)
