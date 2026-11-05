const map = new Map();
map.set('a', 1).set('b', 2);
console.log(map.get('a')); // => 1
console.log(map.size); // => 2

const set = new Set([1, 2, 2, 3]);
console.log(set.has(2)); // => true
console.log([...set]); // => [ 1, 2, 3 ]
