const cadena1 = "Hola mundo \uD815";
const cadena2 = "Bienvenido a ES2024";

console.log(cadena1.toWellFormed()); // => Hola mundo � (los sustitutos sueltos o mal emparejados se reemplazan por U+FFFD (�))
console.log(cadena2.toWellFormed()); // => Bienvenido a ES2024
