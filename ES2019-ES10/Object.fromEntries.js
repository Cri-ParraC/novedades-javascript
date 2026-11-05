const entries = [['a', '1'], ['b', '2'], ['c', '3']];
const object = Object.fromEntries(entries);

console.log(object); // => { a: "1", b: "2", c: "3" }

const paramsString = 'param1=foo&param2=baz';
const searchParams = Object.fromEntries(new URLSearchParams(paramsString));

console.log(searchParams); // => { param1: "foo", param2: "baz" }
