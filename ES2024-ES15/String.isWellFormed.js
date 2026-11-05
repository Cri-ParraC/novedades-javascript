const cadena1 = "Hola mundo \uD815";
const cadena2 = "Bienvenido a ES2024";
const cadena3 = "Bienvenido a ES2024 😀";

console.log(cadena1.isWellFormed()); // => false (\uD815 está en el rango de los sustitutos altos (0xD800–0xDBFF) y no va seguido de un sustituto bajo (0xDC00–0xDFFF))
console.log(cadena2.isWellFormed()); // => true
console.log(cadena3.isWellFormed()); // => true
