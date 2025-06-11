// With binding parameter(<ES9)
try {
  JSON.parse("{malformedJson");
} catch (error) {
  console.log(error);
}

// Without binding parameter(ES9)
try {
  JSON.parse("{malformedJson");
} catch {
  console.log("Ocurrió un error al analizar el JSON");
}