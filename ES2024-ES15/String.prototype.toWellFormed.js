const str1 = "Hello World \uD815";
const str2 = "Welcome to ES2024";

console.log(str1.toWellFormed()); // => Hello World � (lone or mismatched surrogates are replaced with U+FFFD (�))
console.log(str2.toWellFormed()); // => Welcome to ES2024
