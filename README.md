# Модуль 3. Занятие 1. Объекты

---

```
Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та професія.

Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

Зміна властивостей: Змініть вік в об'єкті person на нове значення.

Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи зі значенням.

Видалення властивостей: Видаліть властивість професія з об'єкта person.

Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.

Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з об'єктом person.

Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у вигляді ключ-значення.

Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити вітання з іменем особи.

Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта person за допомогою функції Object.keys().
```

---

```
Написати систему контролю банку.

Властивості:
- список користувачів [userId, FIO,'password']
- список рахунків [userId, accountNumber, value]

Методи:
- додати користувача
- видалити користувача

- створити рахунок
- видалити рахунок

- додати гроші на рахунок
- зняти гроші з рахунка
```

---

Менеджер завдань: Створіть функцію яка створює та повертає обьект завдання.
Об'єкт task, який буде містити властивості Name, deadline, priority та done.
Додайте методи для відмітки завдання як виконаного та для виведення
інформаціїпро завдання.

---

Каталог товарів: Створіть каталог товарів, де кожен товар буде об'єктом з
властивостями назва, ціна та кількість. Додайте методи для додавання товару,
видалення товару та підрахунку загальної вартості.

---

Система реєстрації: Створіть систему реєстрації користувачів, де кожен
користувач буде об'єктом з властивостями ім'я, email, пароль тощо. Додайте метод
для перевірки введеного пароля при вході.

---

Онлайн-книга: Створіть програму для ведення списку прочитаних книг. Кожна книга
буде об'єктом з властивостями назва, автор, рік видання та прочитано
(true/false). Додайте методи для відмітки книги як прочитаної та виведення
статистики про прочитані книги.

---

Ігровий персонаж: Створіть об'єкт, який представляє ігрового персонажа. Додайте
властивості, такі як ім'я, рівень, здоров'я, атака тощо. Реалізуйте методи для
атаки інших персонажів та відновлення здоров'я.

---

Список контактів: Створіть програму для управління списком контактів. Кожен
контакт буде об'єктом з властивостями ім'я, телефон, email тощо. Додайте методи
для додавання, видалення та пошуку контактів.

---

Календар подій: Створіть календар подій, де кожна подія буде об'єктом з
властивостями назва, дата, місце та повідомлення. Додайте методи для додавання
події, видалення події та перегляду подій на певну дату.

---

Онлайн-магазин: Створіть онлайн-магазин з можливістю додавання товарів у кошик
та оформлення замовлення. Кожен товар буде об'єктом з властивостями назва, ціна,
наявність тощо. Реалізуйте методи для додавання товару у кошик, підрахунку
загальної вартості та оформлення замовлення.

---

Пошук інформації: Створіть програму, яка дозволить шукати інформацію в тексті.
Ви створюєте об'єкт зі збереженими текстовими даними та методами для пошуку
заданого слова або фрази у тексті.

---

Банківський рахунок: Створіть об'єкт account, який міститиме інформацію про
банківський рахунок користувача, таку як ім'я, баланс та історія транзакцій.
Додайте методи для додавання та витрати коштів, а також для виведення історії
транзакцій.

---

## Example 1 - Основы обьектов

Напиши скрипт, который, для объекта `user`, последовательно:

- добавляет поле `mood` со значением `'happy'`
- заменяет значение `hobby` на `'skydiving'`
- заменяет значение `premium` на `false`
- выводит содержимое объекта `user` в формате `ключ:значение` используя
  `Object.keys()` и `for...of`

### Код

```js
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
```

## Example 2 - метод Object.values()

У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
суммирования всех зарплат и сохраните результат в переменной sum. Должно
получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

### Код

```js
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
```

## Example 3 - Массив объектов

Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
камней с таким именем, ценой и количеством из обьекта

### Код

```js
const stones = [
  { name: 'Изумруд', price: 1300, quantity: 4 },
  { name: 'Бриллиант', price: 2700, quantity: 3 },
  { name: 'Сапфир', price: 400, quantity: 7 },
  { name: 'Щебень', price: 200, quantity: 2 },
];
```

## Example 4 - Комплексные задачи

Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
в котором необходимо реализовать методы для работы с балансом и историей
транзакций.

```js
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {},

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};
```
