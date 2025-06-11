// Límite de number

console.log(Number.MAX_SAFE_INTEGER); // => 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // => 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // => 9007199254740992 (no sobrepasa el límite)

// Creación de BigInt

const bigInt = 9007199254740991n;
const bigIntConstructor = BigInt(9007199254740991); // => 9007199254740991n
const bigIntString = BigInt('9007199254740991'); // => 9007199254740991n

// typeof

console.log(typeof 1);// => number
console.log(typeof 1n);// => bigint

// Comparaciones

console.log(1n === 1); // => false
console.log(1n === BigInt(1)); // => true
console.log(1n === BigInt('1')); // => true