const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

const interseccion = a.intersection(b);
console.log(interseccion); // =>  Set(2) { 3, 4 }