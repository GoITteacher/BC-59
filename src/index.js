/* 
Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та професія.

Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

Зміна властивостей: Змініть вік в об'єкті person на нове значення.

Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи зі значенням.

Видалення властивостей: Видаліть властивість професія з об'єкта person.

*/
/* const person = {
  name: 'Mariia',
  age: 32,
  profession: 'student',
  showname() {
    console.log(this.name);
  },
};

person.showname();

person.age = 23;
person.workPlace = 'home';
delete person.name;

console.log(person); */

/* 
Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.

Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з об'єктом person.

Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у вигляді ключ-значення.

Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити вітання з іменем особи.

Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта person за допомогою функції Object.keys().
*/

// if (person.profession) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// console.log(!!person.profession1);
// const friend = {
//   name: 'Vova',
//   age: 22,
// =
//   profession: ['student', 'sefs', 'sefse'],
//   workPlace: 'outside',
// };

// for (let key of Object.keys(person)) {
//   friend[key] = person[key];
// }
// console.log(friend);

// ==========================

/* Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у вигляді ключ-значення.

Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити вітання з іменем особи.

Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта person за допомогою функції Object.keys(). */

/* for (const props of Object.entries(person)) {
  // props = [x1 , x2]; // 'x1 - x2'
  let result = props.join(' - ');
  //   let result = props[0] + ' - ' + props[1];
  //   let result = `${props[0]} - ${props[1]}`;
  console.log(result);
}
console.log(Object.keys(person));
 */
