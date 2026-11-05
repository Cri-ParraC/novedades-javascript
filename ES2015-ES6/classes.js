class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}

console.log(new Animal('Cat').speak()); // => Cat makes a sound
console.log(new Dog('Rex').speak()); // => Rex barks
