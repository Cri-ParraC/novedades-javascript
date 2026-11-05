const personas = [
  { nombre: "Juan", edad: 70 },
  { nombre: "Lucía", edad: 5 },
  { nombre: "Pedro", edad: 50 },
  { nombre: "Marta", edad: 15 }
];

// Función callback que clasifica a las personas según su edad
const agrupadoPorEdad = Object.groupBy(personas, ({ edad }) => {
  if (edad >= 60) {
    return "mayor";
  } else if (edad > 17 && edad < 60) {
    return "adulto";
  }
  else {
    return "niño";
  }
});

console.log(agrupadoPorEdad);
