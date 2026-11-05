class Counter {
  #count = 0;

  #log() {
    console.log(`Count: ${this.#count}`);
  }

  increment() {
    this.#count++;
    this.#log();
  }
}

const counter = new Counter();
counter.increment(); // => Count: 1
console.log(counter.count); // => undefined
// counter.#count; // SyntaxError: Private field '#count' must be declared in an enclosing class
