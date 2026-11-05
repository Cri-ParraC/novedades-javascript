const cadena = '12345';

// Antes
console.log(cadena[cadena.length - 2]); // => 4

// Ahora
console.log(cadena.at(-2));             // => 4
