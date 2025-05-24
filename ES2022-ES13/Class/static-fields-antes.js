class MiClase {
  static metodoEstatico() {
    return 'hola';
  }
}

MiClase.propiedadEstatica = 42;

console.log(MiClase.metodoEstatico()); // 'hola'
console.log(MiClase.propiedadEstatica); // 42