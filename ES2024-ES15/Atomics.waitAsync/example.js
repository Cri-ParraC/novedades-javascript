const shared = new Int32Array(new SharedArrayBuffer(4));

// Waits (without blocking the main thread) while shared[0] is 0
const { async, value } = Atomics.waitAsync(shared, 0, 0, 1000);
console.log(async); // => true

value.then(result => console.log(result)); // => ok

setTimeout(() => {
  Atomics.store(shared, 0, 1);
  Atomics.notify(shared, 0);
}, 100);
