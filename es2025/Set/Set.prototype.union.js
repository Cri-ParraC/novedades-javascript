const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

const union = a.union(b);
console.log(union); // =>  Set(6) { 1, 2, 3, 4, 5, 6 }