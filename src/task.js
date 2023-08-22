// const age1 = 20;
// let user = {
//   firstName: 'Вася',
//   showInfo: func,
//   age: age1,
// };

// function func() {
//   console.log(this);
// }

// user.showInfo();

// =========================================

// const obj2 = {
//   name: 'awdawd',
// };

// let obj1 = {
//   name: 'obj1',
//   func() {
//     return () => {
//       console.log(this);
//     };
//   },
// };

// const foo = obj1.func;
// const newFunc = foo.call(obj1);
// newFunc();

// =========================================

// function foo() {
//   // this = window
//   const foo1 = () => {
//     //this = window
//     const foo2 = () => {
//       // this = window
//       const foo3 = () => {
//         // this = window
//         console.log(this);
//       };
//       foo3();
//     };
//     foo2();
//   };
//   foo1();
// }

// foo();

// =========================================

const obj1 = {
  name: 'obj1',
};

let obj2 = {
  name: 'obj2',
  func() {
    function foo() {
      console.log(this);
    }
    return foo;
  },
};

const result = obj2.func;
const newFunc2 = result.bind(obj1);
const newFunc3 = newFunc2.bind(obj2);
const res = newFunc3();
res();

// =========================================

const foo = () => {
  console.log(this);
};

const obj = {
  test: foo.bind(null),
};

obj.test();

console.log(obj);

//=============

// function foo() {}

// foo.bind(user2);
