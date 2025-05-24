class MiClase {
  static propiedadEstatica = 42; // Nuevo
  static metodoEstatico() {
    return 'hola';
  }
}

console.log(MiClase.metodoEstatico()); // 'hola'
console.log(MiClase.propiedadEstatica); // 42