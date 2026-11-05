// Before (you had to wrap the code in an IIFE)
(async () => {
  const value = await Promise.resolve(42);
  console.log(value); // => 42
})();

// Now
const value = await Promise.resolve(42);
console.log(value); // => 42
