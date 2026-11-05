let x = 0;
let y = 1;

x = x || (x = y);
console.log(x); // => 1