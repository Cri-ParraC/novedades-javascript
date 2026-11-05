function* naturals() {
  let n = 1;
  while (true) yield n++;
}

// Works on infinite iterators: only the first 3 values are produced
console.log(naturals().take(3).toArray()); // => [ 1, 2, 3 ]
