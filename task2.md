**Задача для класса FriendList: Управление списком друзей**

Вы разрабатываете приложение для управления списком друзей пользователей. Вам
нужно создать класс `Friend` для представления информации о друге с полями:

- `name` (имя друга)
- `age` (возраст друга)
- `email` (электронная почта друга)
- `isBestFriend` (флаг, указывающий, является ли друг лучшим другом)

Затем создайте класс `FriendList`, который будет представлять список друзей
пользователя. Класс должен иметь следующие методы:

1. `addFriend(friend: Friend)`: Добавляет переданного друга в список друзей.
2. `removeFriend(email: string)`: Удаляет друга по его электронной почте.
3. `getFriendByEmail(email: string)`: Возвращает информацию о друге по его
   электронной почте.
4. `getBestFriends()`: Возвращает список всех лучших друзей.
5. `getFriendsByAge(age: number)`: Возвращает список друзей определенного
   возраста.

Пример использования:

```js
// Создаем объекты Friend
const friend1 = new Friend('John', 25, 'john@example.com', true);
const friend2 = new Friend('Jane', 30, 'jane@example.com', false);
const friend3 = new Friend('Michael', 28, 'michael@example.com', true);

// Создаем объект FriendList
const myFriendList = new FriendList();

// Добавляем друзей в список
myFriendList.addFriend(friend1);
myFriendList.addFriend(friend2);
myFriendList.addFriend(friend3);

// Удаляем друга по электронной почте
myFriendList.removeFriend('jane@example.com');

// Получаем информацию о друге по электронной почте
const foundFriend = myFriendList.getFriendByEmail('john@example.com');

// Получаем список лучших друзей
const bestFriends = myFriendList.getBestFriends();

// Получаем список друзей определенного возраста
const friendsWithAge28 = myFriendList.getFriendsByAge(28);
```

Задача заключается в реализации класса `FriendList` с методами, которые
позволяют управлять списком друзей, добавлять и удалять друзей, а также
выполнять поиск и фильтрацию друзей по различным критериям.
