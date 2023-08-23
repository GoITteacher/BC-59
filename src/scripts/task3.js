class GlobalUser {
  static instance = null;

  constructor() {
    if (GlobalUser.instance === null) {
      GlobalUser.instance = this;
    }
    return GlobalUser.instance;
  }
}

const user1 = new GlobalUser();
const user2 = new GlobalUser();
const user3 = new GlobalUser();
const user4 = new GlobalUser();

user1.name = 123;
console.log(user2.name);
console.log(user1 === user2 && user2 === user3);
