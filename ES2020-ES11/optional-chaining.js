let vehicle1 = {
  car: {
    name: 'ABC',
    speed: 90
  }
};

let vehicle2 = {
};

let vehicle3;

console.log(vehicle1.car); // => { name: 'ABC', speed: 90 }
console.log(vehicle1.car.name); // => ABC
console.log(vehicle1.car.speed); // => 90

console.log(vehicle2.car); // => undefined
console.log(vehicle2.car?.name); // => undefined
console.log(vehicle2.car?.speed); // => undefined

console.log(vehicle3?.car); // => undefined
console.log(vehicle3?.car?.name); // => undefined
console.log(vehicle3?.car?.speed); // => undefined