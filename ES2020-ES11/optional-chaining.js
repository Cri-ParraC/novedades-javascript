let vehiculo1 = {
  coche: {
    nombre: 'ABC',
    velocidad: 90
  }
};

let vehiculo2 = {
};

let vehiculo3;

console.log(vehiculo1.coche); // => { nombre: 'ABC', velocidad: 90 }
console.log(vehiculo1.coche.nombre); // => ABC
console.log(vehiculo1.coche.velocidad); // => 90

console.log(vehiculo2.coche); // => undefined
console.log(vehiculo2.coche?.nombre); // => undefined
console.log(vehiculo2.coche?.velocidad); // => undefined

console.log(vehiculo3?.coche); // => undefined
console.log(vehiculo3?.coche?.nombre); // => undefined
console.log(vehiculo3?.coche?.velocidad); // => undefined
