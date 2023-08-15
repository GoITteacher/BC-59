// const cat = {
//   name: 'Vaska',
//   sayMyaw() {
//     console.log('Myaw myaw');
//   },
//   foo1() {
//     console.log('Rrrrrr');
//   },
// };

// const dog = {
//   name: 'Roof',
//   friend: {
//     name: 'Boss',
//     age: 21,
//     bones: 50,
//   },
//   sayWoof() {
//     console.log('Woof woof');
//     this.bones.push('elem');
//   },
//   foo1() {
//     console.log('GRRRRRR');
//     this.sayWoof();
//   },
//   run() {
//     console.log('I`m');
//   },

//   myDay() {
//     this.sayWoof();
//     this.foo1();
//     this.run();
//     this.sayWoof();
//   },

//   takeBones() {
//     this.friend.bones -= 1;
//     this.bones.push('bones');
//   },

//   bones: [],
// };

// dog.takeBones();
// dog.takeBones();
// dog.takeBones();

// console.log(dog);

// const frog = {
//   name: 'Kvaksha',
//   sayKva() {
//     console.log('Kva kva');
//   },
//   swim() {
//     console.log('bulk');
//   },
// };

// cat.sayMyaw();
// dog.sayWoof();
// frog.sayKva();

const dog = {
  dogName: '123',
  dogAge: 123,
  sayWoof() {},
  takeEat() {
    debugger;
    for (const elem of arguments) {
      if (!this.eats[elem]) {
        this.eats[elem] = 1;
      } else {
        this.eats[elem] += 1;
      }
    }
  },

  eats: {},
};

dog.takeEat('meat', 'bones', 'milk');
dog.takeEat('cheese', 'meat');
dog.takeEat('meat');

console.log(dog.eats);
