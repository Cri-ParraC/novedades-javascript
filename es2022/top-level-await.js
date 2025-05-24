// Antes (debías envolver el código en una IIFE)
(async () => {
  const valor = await Promise.resolve(42);
  console.log(valor); // 42
})();

// Ahora
const valor = await Promise.resolve(42);
console.log(valor); // 42