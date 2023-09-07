const foo = () => {
  Promise.resolve().then(() => foo());
};

foo();
