const string = '12345';

// Antes
console.log(string[string.length - 2]); // => 4

// Ahora
console.log(string.at(-2));             // => 4