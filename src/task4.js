/* 
Система реєстрації: Створіть систему реєстрації користувачів, де кожен
користувач буде об'єктом з властивостями ім'я, email, пароль тощо.
Додайте метод для перевірки введеного пароля при вході.
*/
const system = {
  users: [],
  createUser(name, email, password, ...props) {
    const user = { name, email, password, props };
    this.users.push(user);
  },
  checkPassword(email, password) {
    for (let user of this.users) {
      if (user.email === email && user.password === password) {
        return true;
      }
    }
    return false;
  },
  checkUserName(name) {
    for (let user of this.users) {
      if (user.name === name) {
        return true;
      }
    }
    return false;
  },
  deleteUser(name) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].name === name) {
        this.users.splice(i, 1);
      }
    }
  },

  getUserInfo(name) {
    if (system.checkUserName(name)) {
      for (let user of this.users) {
        if (name === user.name) {
          return user;
        }
      }
    }
  },
};

system.createUser('Vitalii1', 'doc_saed@meta.ua', 12345678, 37);
system.createUser('Vitalii2', 'doc_saed@meta.ua', 12345678, 37);
system.createUser('Vitalii3', 'doc_saed@meta.ua', 12345678, 37);
system.createUser('Vitalii4', 'doc_saed@meta.ua', 12345678, 37);
system.createUser('Vitalii5', 'doc_saed@meta.ua', 12345678, 37);
console.log(system.checkPassword('doc_saed@meta.ua', 12345678));
console.log(system.users);
system.deleteUser('Vitalii3');
console.log(system.users);
console.log(system.getUserInfo('Vitalii1'));
