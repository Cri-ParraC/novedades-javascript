const string = '12345';

// Before
console.log(string[string.length - 2]); // => 4

// Now
console.log(string.at(-2));             // => 4
