function* counter() {
  yield 1;
  yield 2;
  yield 3;
}

const it = counter();
console.log(it.next()); // => { value: 1, done: false }
console.log([...counter()]); // => [ 1, 2, 3 ]
