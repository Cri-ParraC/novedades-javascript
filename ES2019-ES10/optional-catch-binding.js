// Con parámetro en el catch (<ES10)
try {
  JSON.parse("{jsonMalFormado");
} catch (error) {
  console.log(error);
}

// Sin parámetro en el catch (ES10)
try {
  JSON.parse("{jsonMalFormado");
} catch {
  console.log("Ocurrió un error al analizar el JSON");
}
