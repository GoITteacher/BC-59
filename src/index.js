//================================
// Выведи на экран общее количество яблок и винограда.
// Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;

// console.log(total);

// const diff = apples - grapes;
// console.log(diff);

//================================
// let students = 200;
// students *= 50; // 5000
// students += 10; // 5010
// console.log(students);

// students = students ** 2;
// students **= 2;
// students *= students;
// students = Math.pow(100, 2);

// console.log(students);

//================================
// const result = 1 + 5 ** 2 * 3 - 5;

// console.log(result);
//================================
// Напиши скрипт, который выводит в консоль округленные
// вверх/вниз и т.д. значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round().
// Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 23.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));
//================================

// Составь фразу с помощью шаблонных строк A has B
// bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} in stock`;
// console.log(message);
//"Cyberdyne Systems has 200 bots in stock"

// ==================================

/* 
Напиши скрипт который рассчитывает индекс массы
тела человека. Для этого необходимо разделить вес
в киллограммах на квадрат высоты человека в метрах.

Вес и высота хранятся в переменных weight и height,
но не как числа, а в виде строк (специально для задачи).
Нецелые числа могут быть заданы в виде 24.7 или 24,7,
то есть в качестве разделителя дробной части может быть
запятая.

Индекс массиы тела необходимо округлить до одной 
цифры после запятой;
*/

// let weight = '88,3';
// let height = '1.75';

// weight = weight.replace(',', '.');
// weight = Number.parseFloat(weight);
// console.log(weight);

// height = height.replace(',', '.');
// height = Number.parseFloat(height);
// console.log(height);

// const bmi = (weight / Math.pow(height, 2)).toFixed(1);

// console.log(+bmi);

// ===========

// console.log(5 > 4); // t

// console.log(10 >= '7'); // t

// console.log('2' > '12'); // f f

// console.log('125' < '123'); // t t

// =
// console.log('4' == 4); // t

// console.log('6' === 6); // f

// console.log('false' === false); // f

// console.log(1 == true); // t

// console.log(1 === true); // f
// =========

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// =================================

// console.log(true && 3); // 3

// console.log(false && 3); // f

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4); // t

// console.log(true || false || 7); // t

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); // f

// console.log(null || (2 && 3) || 4); //3

// ============

// console.log(1 && 5); // 5
// console.log(5 && 1); // 1
// console.log(0 && 2); // 0
// console.log(2 && 0); //0
// console.log('' && 'Mango'); // ''
// console.log('Mango' && ''); //''
// console.log('Mango' && 'Poly'); // 'P'
// console.log('Poly' && 'Mango'); // 'Ma

// ===========

// console.log(true || false); //t
// console.log(false || true); // t
// console.log(true || true); // t

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); //true

// ===================

// console.log(!true); // f
// console.log(!false); // t
// console.log(!3); // f
// console.log(!'Mango'); // f
// console.log(!0); // t
// console.log(!''); // t

// const isOnline = true;
// const isNotOnline = !isOnline; // f

// ==========================

/* 
Отрефактори код так, чтобы в переменную value
присваивалось значение переменной incomingValue,
если оно не равно undefined или null. 
В противном случае должно присваиваться значение
defaultValue. Проверь работу скрипта для слепдующих
значений переменной incomingValue: null, undefined, 
0, false. Используй оператор ?? (nullish coalescing operator).
*/

// const incomingValue = undefined;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

//======================

//  Напиши скрипт который переведёт значение totalMinutes
//  (количество минут) в строку в формате часов и минут HH:MM.
// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01

// const totalMinutes = 450;
// const hours = Math.floor(totalMinutes / 60) + '';
// const minutes = (totalMinutes % 60) + '';
// const str = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
// console.log(str);

// =================

// Створи змінну x зі значенням 5 і змінну y зі значенням 3.
// Обчисли суму, різницю, добуток і частку x та y.
// const x = 5;
// const y = 3;
// const result1 = x - y;
// const result2 = x + y;
// const result3 = x * y;
// const result4 = x / y;
// console.log(result1, result2, result3, +result4.toFixed(2));
// Створи змінну name і присвой їй твоє ім'я.
// Створи рядок, що вітає тебе, використовуючи цю змінну.
// const name = 'illia';
// console.log(`hello ${name}`);

// ===========================

// Напиши програму, яка перевіряє, чи введене користувачем
// число є парним чи непарним.
// const age = +prompt('How old are you?');
// console.log(age % 2 === 0);

// console.log(+prompt('How old are you?') % 2 === 0);

// ===============================

// Створи змінну age і присвой їй свій вік.
// Напиши умову, яка виводить повідомлення "Ти підліток",
//  якщо age менше 18, і "Ти дорослий", якщо age 18 або більше.

// const age = 21;
// const result = age < 18 ? 'Teen' : 'Adult';
// console.log(result);

// ==========

/* 
Дано рік, поверніть століття, в якому він знаходиться.
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

// const year = 2000;
// const st = Math.ceil(year / 100);
// console.log(st);

// =======================

const lenA = 10;
const radius = (2 * lenA) / Math.PI;
const sqr = radius ** 2;
console.log(sqr);
