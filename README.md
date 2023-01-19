# Модуль 5. Занятие 9. Контекст вызова функции и this

## Example 1 - Мастерская драгоценностей

Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
количеством из свойства `stones`.

```js
const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {},
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600
```

## Example 2 - Телефонная книга

Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

```js
const phonebook = {
  contacts: [],
  add(contact) {},
  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  }),
);
console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  }),
);
```

## Example 3 - Калькулятор

Создайте объект `calculator` с тремя методами:

- `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
- `add()` - возвращает сумму сохранённых значений.
- `mult()` - перемножает сохранённые значения и возвращает результат.

```js
const calculator = {};
```

# Codewars

1. [Kata](https://www.codewars.com/kata/5983cba828b2f1fd55000114)
1. [Kata](https://www.codewars.com/kata/5848565e273af816fb000449)
1. [Kata](https://www.codewars.com/kata/581e014b55f2c52bb00000f8)
1. [Kata](https://www.codewars.com/kata/59df2f8f08c6cec835000012)
1. [Kata](https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9)
1. [Kata](https://www.codewars.com/kata/5783ef69202c0ee4cb000265)
1. [Kata](https://www.codewars.com/kata/60cc93db4ab0ae0026761232)
1. [Kata](https://www.codewars.com/kata/513e08acc600c94f01000001)
1. [Kata](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec)
1. [Kata](https://www.codewars.com/kata/54b724efac3d5402db00065e)
1. [Kata](https://www.codewars.com/kata/5277c8a221e209d3f6000b56)
1. [Kata](https://www.codewars.com/kata/51e0007c1f9378fa810002a9)
1. [Kata](https://www.codewars.com/kata/556deca17c58da83c00002db)
1. [Kata](https://www.codewars.com/kata/54e6533c92449cc251001667)
1. [Kata](https://www.codewars.com/kata/5727bb0fe81185ae62000ae3)
1. [Kata](https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08)
1. [Kata](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)
