// Manera antigua de obtener el objeto global

const objetoGlobal =
  (typeof window === "object" && window) ||
  (typeof self === "object" && self) ||
  (typeof global === "object" && global) ||
  (function () { return this; })() ||
  Function("return this")();

console.log(objetoGlobal);

// Manera nueva

console.log(globalThis);
