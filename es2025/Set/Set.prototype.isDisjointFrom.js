const a = new Set([1, 2]);
const b = new Set([1, 2, 3, 4]);
const c = new Set([3, 4]);

console.log(a.isDisjointFrom(c)); // => true

console.log(b.isDisjointFrom(a)); // => false