let x;
let y = 1;

x ?? (x = y);
console.log(x); // => 1