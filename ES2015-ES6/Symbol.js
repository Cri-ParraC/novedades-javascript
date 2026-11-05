const id = Symbol('id');
const user = { name: 'John', [id]: 123 };

console.log(user[id]); // => 123
console.log(Object.keys(user)); // => [ 'name' ]
console.log(Symbol('id') === Symbol('id')); // => false
