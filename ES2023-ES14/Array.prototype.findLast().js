const numeros = [1, 2, 3, 4, 5];

const primerPar = numeros.find((numero) => numero % 2 === 0);
console.log(primerPar); // => 2

const ultimoPar = numeros.findLast((numero) => numero % 2 === 0); // Nuevo
console.log(ultimoPar); // => 4
