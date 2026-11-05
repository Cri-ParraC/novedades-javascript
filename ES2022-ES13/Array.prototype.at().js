const numeros = [1, 2, 3, 4, 5];

// Antes
console.log(numeros[numeros.length - 2]); // => 4

// Ahora
console.log(numeros.at(-2));              // => 4
