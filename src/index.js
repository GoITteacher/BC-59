/* 
Создайте массив genres с элементами «Jazz» и «Blues».
Добавьте «Рок-н-ролл» в конец.
Выведите в консоль первый элемент массива.
Выведите в консоль последний элемент массива. 
Код должен работать для массива произвольной длины.

Удалите первый элемент и выведите его в консоль.
Вставьте «Country» и «Reggae» в начало массива.
*/

// const genres = ['Jazz', 'Blues', '123', '345'];
// genres.push('Рок-н-ролл');
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.unshift('Country', 'Reggae');
// console.log(genres);

// ==============

// Напиши скрипт для вычисления площади прямоугольника
// со сторонами, значения которых хранятся в переменной values
// в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';
// const nums = values.split(` `);
// console.log(nums);
// const x = +nums[0];
// const y = +nums[1];
// const sq = x * y;
// console.log(sq);
// console.log(x * y);

// =======================

/* Напиши скрипт для перебора массива fruits циклом for. 
Для каждого элемента массива выведи в консоль строку в формате 
номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1. 
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1} : ${fruits[i]}`);
// }
// for (let i = fruits.length - 1; i >= 0; i -= 1) {
//   console.log(`${i + 1} : ${fruits[i]}`);
// }

// =========================

/* 
Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
В переменных names и phones хранятся строки имен и телефонных номеров, разделенные 
запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. 
Количество имен и телефонов гарантированно одинаковое.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001254567,89001112233,890055566277,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');
// for (let i = 0; i < namesArr.length; i += 1) {
//   //   console.log(namesArr[i], phonesArr[i]);
//   if (phonesArr[i].includes('3')) {
//     console.log(namesArr[i], phonesArr[i]);
//   }
// }

// =================================

/* Напиши скрипт который выводит в консоль все слова строки кроме первого 
и последнего. Результирующая строка не должна начинаться или заканчиваться 
пробельным символом. Скрипт должен работать для любой строки. */

// const string = '   Welcome to the future awda srfs edawd sfsef awdaw last     ';
// const stringArr = string.split(' ');
// stringArr.shift();
// stringArr.pop();

// const finArr = string.split(' ').slice(1, -1).join(' ').trim();
// console.log(finArr);

// ========================================

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const max = 5;
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);

// ========================================

/* 
Напиши скрипт который «разворачивает» строку 
(обратный порядок букв) и выводит ее в консоль.
*/

// const string = 'Welcome to the future'.split('');
// const result = string.reverse().join('');
// console.log(result);

// console.log(string);
// const reverse = [];
// for (let i = 0; i < string.length; i += 1) {
//   reverse.unshift(string[i]);
// }
// console.log(reverse.join(``));

// =======================================

/* 
Напиши скрипт сортировки массива строк в
алфавитном порядке по первой букве элемента. 
*/

// 5 .
//               |
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
//                                                               |

// let counter = 0;
// for (let i = 0; i < langs.length - 1; i += 1) {
//   for (let j = i; j < langs.length; j += 1) {
//     if (langs[i] > langs[j]) {
//       const temp = langs[j];
//       langs[j] = langs[i];
//       langs[i] = temp;
//     }
//   }
// }

// console.log(counter);
// console.log(langs);

// const arr1 = [2, 1, 3];
// const temp = arr[0]; // 1
// arr[0] = arr[1];
// arr[1] = temp;

// 0 1 2 6 8

// console.log('a' > 'b');

// ================

/* const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let y = 0; y < arr.length; y++) {
  for (let x = 0; x < arr[y].length; x++) {
    console.log(arr[y][x]);
  }
}

console.log(arr[2][0]); */

// ============================

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(min);
// =============================
// .      0            1 .       2

// const arr = ['Telescopes', 'Cba', 'Glasses', 'Eyes', 'Monocles', 'Abcsefse'];
// for (let i = 0; i < arr.length; i += 1) {
//   for (let j = i; j < arr.length; j += 1) {
//     if (arr[j].length < arr[i].length) {
//       const temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

// console.log(arr);
// ===================================

// const arr = [3, 5, 8, 98, 2, 1, 4, 6, 7];
// const arrCopy = Array.from(arr);
// const min = arrCopy.indexOf(Math.min(...arrCopy)); //3
// arrCopy.splice(min, 1);
// console.log(arrCopy);

// ===================================

// const min = 3;
// const max = 20;
// let count = 0;
// for (let i = min; i <= max; i += 1) {
//   if (!i.toString().includes('5')) {
//     count += 1;
//     console.log(i);
//   }
// }
// console.log(count);

// ===================================

// const arr = [1, 2, 3, 4, 5, 6, 10];
// for (let i = 1; i < arr.length; i += 1) {
//   if (arr[i] !== arr[i - 1] + 1) {
//     for(let j = 0;j<10-6;j++){
//         console.log(arr[i - 1] + j + 1);
//     }
//     console.log(arr[i - 1] + 1);
//   }
// }

// ==================================

const arr = [
  1,
  4,
  'awd',
  2,
  5,
  'sefsef',
  4,
  'drg',
  2,
  3,
  'ssefsef',
  2,
  'awd',
  3,
];

for (let i = 0; i < arr.length - 1; i++) {
  const isNumber = typeof arr[i] === 'number';
  const isString = typeof arr[i + 1] === 'string';
  const isLength = arr[i] > arr[i + 1].length;
  console.log(isNumber && isString && isLength);
}
