const str1 = "Hello World \uD815";
const str2 = "Welcome to ES2024";
const str3 = "Welcome to ES2024 😀";

console.log(str1.isWellFormed()); // => false (\uD815 está en el rango de high surrogates (0xD800–0xDBFF) y no va seguido de un low surrogate (0xDC00–0xDFFF))
console.log(str2.isWellFormed()); // => true
console.log(str3.isWellFormed()); // => true