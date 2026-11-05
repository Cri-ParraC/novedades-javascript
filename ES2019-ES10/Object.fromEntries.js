const entradas = [['a', '1'], ['b', '2'], ['c', '3']];
const objeto = Object.fromEntries(entradas);

console.log(objeto); // => { a: "1", b: "2", c: "3" }

const cadenaParametros = 'nombre=Ana&ciudad=Madrid';
const parametrosBusqueda = Object.fromEntries(new URLSearchParams(cadenaParametros));

console.log(parametrosBusqueda); // => { nombre: "Ana", ciudad: "Madrid" }
