const inventario = [
  { nombre: 'espárragos', tipo: 'verduras', cantidad: 5 },
  { nombre: 'plátanos', tipo: 'fruta', cantidad: 0 },
  { nombre: 'cabra', tipo: 'carne', cantidad: 23 },
  { nombre: 'cerezas', tipo: 'fruta', cantidad: 5 },
  { nombre: 'pescado', tipo: 'carne', cantidad: 22 },
];

const agrupadoPorCantidad = Object.groupBy(inventario, ({ cantidad }) =>
  cantidad < 6 ? 'pocoStock' : 'enStock',
);

console.log(agrupadoPorCantidad);
