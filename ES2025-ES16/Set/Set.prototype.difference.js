const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

const diferencia = a.difference(b);
console.log(diferencia); // =>  Set(2) { 1, 2 }