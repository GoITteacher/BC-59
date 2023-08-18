/* 
Колбек функція повинна приймати один параметр та виводити його до консолі 
*/
// function globalCallBack(data) {
//   console.log(`Result - `, data);
// }

// function globalCallBack(data) {
//   data.forEach(el => {
//     console.log(el);
//   });
// }
/* Сума чисел: Напишіть функцію sumArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна обчислити суму чисел у масиві та передати результат у колбек.
 */

// function sumArray(numbers, callback) {
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number;
//   }
//   callback(sum);
// }

// sumArray([10, 12, 13, 14], data => {
//   console.log(`Test - ${data}`);
// });
// sumArray([10, 12, 13, 14], globalCallBack);

/* 
Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна подвоїти кожне число в масиві та передати новий масив у колбек.
*/

/* function doubleArray(numbers, callback) {
  let result = [];
  //   for (let number of numbers) {
  //     result.push(number * 2);
  //   }

  numbers.forEach(function (element) {
    result.push(element * 2);
  });

  callback(result);
}

doubleArray([321, 876, 564], globalCallBack);
doubleArray([321, 876, 564], globalCallBack); */

/* 
Фільтр слів: Напишіть функцію filterWords(words, condition, callback), яка приймає масив рядків words, функцію condition (перевірка рядка) та колбек callback. Функція повинна фільтрувати слова масиву за допомогою переданої умови та передати відфільтрований масив у колбек. */

// function filterWords(words, condition, callback) {
//   const ourWords = [];
//   words.forEach(function (word) {
//     const result = condition(word, 5); // true || false;
//     if (result) {
//       ourWords.push(word);
//     }
//   });
//   console.log(ourWords);
// }

// filterWords(['Hello', 'Test', 'Privet', 'Base', 'Mono'], condition);

/*Функція Condition повинна приймати два параметри (string, minLength) та повертати true якщо довжина рядка більша за minLength. В інакшому випадку повертати false.
 */

// function condition(string, minLength) {
//   return string.length < minLength;
// }

/* 
Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великою, і передати перетворений масив в колбек.
*/
function capitalizeStrings(strings, callback) {
  const result = [];

  //   for (string of strings) {
  //     let newArray = string.split('');
  //     newArray[0] = newArray[0].toUpperCase();
  //     let saveArray = newArray.join(``);
  //     result.push(saveArray);
  //   }

  //   for (let string of strings) {
  //     const firstLetter = string[0].toUpperCase(); // 'H'
  //     const end = string.slice(1);
  //     const word = firstLetter + end;
  //     result.push(word);
  //   }

  //   callback(result);
}

// capitalizeStrings(['hello', 'test', 'sefsef', 'world'], globalCallBack);

/* 
Пошук максимуму: Напишіть функцію findMax(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна знайти максимальне число в масиві та передати його в колбек.
*/

/* const name = () => {};

const findMax = (numbers, callback) => {
  //   let max = numbers[0];
  //   numbers.forEach(element => {
  //     if (max < element) {
  //       max = element;
  //     }
  //   });

  let max = Math.max(...numbers);
  callback(max);
};

findMax([4, 1, 3, 6, 7, 2, 1], globalCallBack); */

/* 
Перевірка на парність: Напишіть функцію checkEven(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна перевірити, чи всі числа в масиві парні, і передати результат перевірки колбек.
*/
/* function checkEven(numbers, callback) {
  let result = true;

  //   for (const ell of numbers) {
  //     result = ell % 2 === 0 && result;
  //   }

  numbers.forEach((ell, idx, arr) => {
    result = ell % 2 === 0 && result;
  });

  callback(result);
} */

// checkEven([2, 8, 7, 6, 10, 7, 4], globalCallBack);
// 1 * 1 * 1 * 1 * 1 * 1 * 1 * 1 = 0;

/* 
Об'єднання рядків: Напишіть функцію concatStrings(strings, separator, callback), яка приймає масив рядків strings, рядок separator та колбек callback. Функція повинна об'єднати рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що вийшов, в колбек.
*/
const concatStrings = (strings, separator, callback) => {
  let sumStrings = strings.join(separator);
  callback(sumStrings);
};

// concatStrings(['lggjf', 'solo', 'olef'], '-', globalCallBack);

/* 
Перетворення в числа: Напишіть функцію parseNumbers(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити кожен рядок з масиву на число і передати новий масив чисел в колбек.
*/
const parseNumbers = (strings, callback) => {
  let stringsArr = [];
  strings.forEach(element => {
    stringsArr.push(+element);
  });
  callback(stringsArr);
};

// parseNumbers(['22', '33', '12', '1', '2', '5'], globalCallBack);
/* 
Підрахунок символів: Напишіть функцію countCharacters(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна підрахувати загальну кількість символів у всіх рядках масиву та передати результат у колбек.
*/

/* function countCharacters(strings, callback) {
  //   let total = 0;
  //   strings.forEach((el, idx, arr) => {
  //     total += el.length;
  //   });
  let total = strings.join('').length;
  callback(total);
} */

// countCharacters(['Hello', 'Test'], globalCallBack);

/* 
Сортування чисел: Напишіть функцію sortNumbers(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна відсортувати числа в масиві за зростанням та передати відсортований масив у колбек.
*/

// function sortNumbers(numbers, callback) {
//   for (i = 0; i < numbers.length; i += 1) {
//     for (j = 0; j < numbers.length; j += 1) {
//       if (numbers[i] <= numbers[j]) {
//         let temp = numbers[i];
//         numbers[i] = numbers[j];
//         numbers[j] = temp;
//       }
//     }
//   }
//   callback(numbers);
// }

// sortNumbers(
//   [1, 2, 4, 5, 6, 2, 2, 1, 3, 5, 1, 3, 5, 7, 2, 345, 56, 3, 23, 4546],
//   globalCallBack,
// );

/* 
https://www.codewars.com/kata/5848565e273af816fb000449
*/
/* 
Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter



encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

const encryptThis = string => {
  // 'Hello world' ['Hello', world]
  const arrString = string.split(' ');
  let encryptArr = [];
  for (let word of arrString) {
    encryptArr.push(encryptWord(word));
  }
  return encryptArr.join(' ');
};

encryptThis('Hello world, wellcome back to codding challange');

function encryptWord(word) {
  word = word.split('');
  const leterSwap = word[1];
  word[1] = word[word.length - 1];
  word[word.length - 1] = leterSwap;

  word[0] = word[0].charCodeAt();
  word = word.join('');
  return word;
}

/* 
https://www.codewars.com/kata/581e014b55f2c52bb00000f8
*/

/* 
https://www.codewars.com/kata/59df2f8f08c6cec835000012
*/

/* 
https://www.codewars.com/kata/60cc93db4ab0ae0026761232
*/

// ==========================================

//'Hello'.charCodeAt(3) => 112
// word = word.charCodeAt(0) + word.slice(1)

// ========================

const arr = [55, 22, 41, 5, 6];

const copy = [...arr, ...arr];
console.log(copy);

const [x, y, ...rest] = arr;
console.log(x, y, rest);

function foo([x, y, ...rest]) {
  console.log(rest);
}

foo(arr);
