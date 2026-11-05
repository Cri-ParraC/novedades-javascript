const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

const symmetricDifference = a.symmetricDifference(b);
console.log(symmetricDifference); // =>  Set(4) { 1, 2, 5, 6 }