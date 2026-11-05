function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3)); // => 6

const a = [1, 2];
const b = [...a, 3, 4];
console.log(b); // => [ 1, 2, 3, 4 ]
