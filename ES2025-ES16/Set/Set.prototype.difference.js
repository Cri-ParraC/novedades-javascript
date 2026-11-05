const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

const difference = a.difference(b);
console.log(difference); // =>  Set(2) { 1, 2 }