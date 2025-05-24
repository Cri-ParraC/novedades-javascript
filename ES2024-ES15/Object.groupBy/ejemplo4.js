const people = [
  { name: "John", age: 70 },
  { name: "Kane", age: 5 },
  { name: "Jack", age: 50 },
  { name: "Rambo", age: 15 }
];

// Callback function to categorize people based on age 
const groupByAge = Object.groupBy(people, ({ age }) => {
  if (age >= 60) {
    return "senior";
  } else if (age > 17 && age < 60) {
    return "adult";
  }
  else {
    return "kid";
  }
});