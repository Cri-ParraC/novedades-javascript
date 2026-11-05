const inventario = [
  { tipo: 'fruta', subtipo: 'cítrico', nombre: 'naranja', cantidad: 10 },
  { tipo: 'fruta', subtipo: 'baya', nombre: 'fresa', cantidad: 30 },
  { tipo: 'verdura', subtipo: 'raíz', nombre: 'zanahoria', cantidad: 20 },
  { tipo: 'verdura', subtipo: 'hoja', nombre: 'lechuga', cantidad: 15 },
  { tipo: 'fruta', subtipo: 'cítrico', nombre: 'limón', cantidad: 5 }
];

const agrupadoPorTipoYSubtipo = Object.groupBy(inventario, ({ tipo, subtipo }) => // Agrupa según las propiedades `tipo` y `subtipo`
  `${tipo}::${subtipo}` // Clave compuesta con `tipo` y `subtipo`
);

console.log(agrupadoPorTipoYSubtipo);
