const inventario = [
  { nombre: 'espárragos', tipo: 'verduras', cantidad: 5 },
  { nombre: 'plátanos', tipo: 'fruta', cantidad: 0 },
  { nombre: 'cabra', tipo: 'carne', cantidad: 23 },
  { nombre: 'cerezas', tipo: 'fruta', cantidad: 5 },
  { nombre: 'pescado', tipo: 'carne', cantidad: 22 },
];

const agrupadoPorTipo = Object.groupBy(inventario, ({ tipo }) => // Agrupa según la propiedad `tipo`
  tipo // Clave `tipo`
);

console.log(agrupadoPorTipo);
