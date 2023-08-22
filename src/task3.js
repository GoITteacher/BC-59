/* let elem = {
  value: 'Привіт',
};

function func(surname, name) {
  console.log(surname, name);
  let obj1 = {
    foo: () => {
      console.log(this);
    },
  };

  return obj1.foo;
} */

// const myFunc = func.apply(elem, ['Vasya', 'Vasya1']);
// myFunc();

// =====================================================

/* const obj1 = {
  name: 'obj1',
};
const obj2 = {
  name: 'obj2',
};

function sum(x, y) {
  console.log(this, x + y);
}

const min = 10;
const max = 20;
const arr = [10, 20];

foo.call(obj1, min, max);
foo.apply(obj2, arr);
 */
// const foo1 = foo.bind(obj1);
// const foo2 = foo1.bind(obj2);

// foo2();

// =========================

const user = {
  name: 'Vasya',
  showName() {
    console.log(this.name.toUpperCase().trim().replace(' ', '-'));
  },
};

const user1 = {
  name: 'Petro',
};

user.showName.call(user1);
