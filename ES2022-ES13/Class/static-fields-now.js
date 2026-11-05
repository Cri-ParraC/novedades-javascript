class MyClass {
  static staticProperty = 42; // New
  static staticMethod() {
    return 'hello';
  }
}

console.log(MyClass.staticMethod()); // => 'hello'
console.log(MyClass.staticProperty); // => 42
