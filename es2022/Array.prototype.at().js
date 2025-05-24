const array = [1, 2, 3, 4, 5];

// Antes
console.log(array[array.length - 2]); // => 4

// Ahora
console.log(array.at(-2));            // => 4