// Old way to get the global object

const globalObject =
  (typeof window === "object" && window) ||
  (typeof self === "object" && self) ||
  (typeof global === "object" && global) ||
  (function () { return this; })() ||
  Function("return this")();

console.log(globalObject);

// New way

console.log(globalThis);
