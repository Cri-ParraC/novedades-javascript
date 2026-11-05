const user = {
  name: 'John',
  get greeting() {
    return `Hello, ${this.name}`;
  },
};

console.log(Object.getOwnPropertyDescriptors(user));
// => {
//   name: { value: 'John', writable: true, enumerable: true, configurable: true },
//   greeting: { get: [Function: get greeting], set: undefined, enumerable: true, configurable: true }
// }

// Unlike Object.assign, it copies getters as getters
const clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
clone.name = 'Jane';
console.log(clone.greeting); // => Hello, Jane
