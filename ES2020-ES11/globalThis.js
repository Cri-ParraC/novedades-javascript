// Manera antigua de comprobar el objeto global

const globalObject =
  (typeof window === "object" && window) ||
  (typeof self === "object" && self) ||
  (typeof global === "object" && global) ||
  (function () { return this; })() ||
  Function("return this")();

console.log(globalObject);

// Manera nueva

console.log(globalThis);