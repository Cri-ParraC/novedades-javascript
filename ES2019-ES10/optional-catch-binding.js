// With a catch parameter (<ES10)
try {
  JSON.parse("{malformedJson");
} catch (error) {
  console.log(error);
}

// Without a catch parameter (ES10)
try {
  JSON.parse("{malformedJson");
} catch {
  console.log("An error occurred while parsing the JSON");
}
