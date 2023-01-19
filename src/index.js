let counter = 1;
const foo = () => {
  console.log(counter++);
  Promise.resolve().then(() => foo());
};

foo();
