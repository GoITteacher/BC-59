class Friend {
  static counter = 1;
  constructor(name, age, email, isBestFriend) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.isBestFriend = isBestFriend;
    this.id = Friend.counter;
    Friend.counter += 1;
  }

  showInfo() {
    console.log(this);
  }
}

/* 
Затем создайте класс FriendList, который будет представлять 
список друзей пользователя. Класс должен иметь следующие методы:

addFriend(friend: Friend): Добавляет переданного друга в список друзей.
removeFriend(email: string): Удаляет друга по его электронной почте.
getFriendByEmail(email: string): Возвращает информацию о друге по его 
электронной почте.
getBestFriends(): Возвращает список всех лучших друзей.
getFriendsByAge(age: number): Возвращает список друзей
определенного возраста.
*/

class FriendList {
  allFriend = [];

  addFriend(friend) {
    this.allFriend.push(friend);
  }
  removeFriend(id) {
    const indxId = this.allFriend.findIndex((el, indx) => el.id === id);
    this.addFriend.splice(indxId, 1);
  }
  getFriendById(id) {
    const friendById = this.allFriend.find(el => el.id === id);
    return friendById;
  }
  getBestFriends() {
    const bestFriend = this.allFriend.filter(el => el.isBestFriend);
    return bestFriend;
  }
  getFriendsByAge(number) {
    const friendsByNumber = this.allFriend.filter(el => el.age === number);
    return friendsByNumber;
  }
}
