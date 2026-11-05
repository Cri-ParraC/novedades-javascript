const numbers = [1, [2, [3, [4]]]];

console.log(numbers.flat()); // => [ 1, 2, [ 3, [ 4 ] ] ]
console.log(numbers.flat(2)); // => [ 1, 2, 3, [ 4 ] ]
console.log(numbers.flat(Infinity)); // => [ 1, 2, 3, 4 ]
