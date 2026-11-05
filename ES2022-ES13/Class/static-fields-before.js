class MyClass {
  static staticMethod() {
    return 'hello';
  }
}

MyClass.staticProperty = 42;

console.log(MyClass.staticMethod()); // => 'hello'
console.log(MyClass.staticProperty); // => 42
