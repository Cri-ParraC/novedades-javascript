const numeros = [1, 2, 3, 4, 5];

const indicePrimerPar = numeros.findIndex((numero) => numero % 2 === 0);
console.log(indicePrimerPar); // => 1

const indiceUltimoPar = numeros.findLastIndex((numero) => numero % 2 === 0); // Nuevo
console.log(indiceUltimoPar); // => 3
