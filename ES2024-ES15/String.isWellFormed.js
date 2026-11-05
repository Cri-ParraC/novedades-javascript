const str1 = "Hello World \uD815";
const str2 = "Welcome to ES2024";
const str3 = "Welcome to ES2024 😀";

console.log(str1.isWellFormed()); // => false (\uD815 is in the high surrogate range (0xD800–0xDBFF) and is not followed by a low surrogate (0xDC00–0xDFFF))
console.log(str2.isWellFormed()); // => true
console.log(str3.isWellFormed()); // => true
