function f() {
  // obj
  const foo = () => {
    // obj
    this.x = 5;

    const test = () => {
      // obj
      console.log(this);
    };

    test();
  };

  return foo;
}

const obj = {
  name: 'obj',
};

let obj1 = {
  name: 123,
  foo1: f.call(obj),
};

obj1.foo1();
