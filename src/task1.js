// let elem = {
//   value: '123',
// };

// function func(a, b) {
//   function arrow(a, b) {
//     console.log(this);
//   }
//   arrow();
// }

// func.call(elem);

// ===============

const user1 = {
  name: ' Volodka',
  tesla() {
    console.log(this);
  },
};

const user2 = {
  name: 'Vasya',
};

// user1.tesla.apply(user2);

const tesla1 = user1.tesla.bind(user2);
tesla1();
