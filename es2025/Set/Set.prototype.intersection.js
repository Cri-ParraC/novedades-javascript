const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

const intersection = a.intersection(b);
console.log(intersection); // =>  Set(2) { 3, 4 }