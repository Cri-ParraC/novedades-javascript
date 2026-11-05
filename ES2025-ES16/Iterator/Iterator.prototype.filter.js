const numbers = [1, 2, 3, 4, 5].values();

console.log(numbers.filter(n => n % 2 === 0).toArray()); // => [ 2, 4 ]
