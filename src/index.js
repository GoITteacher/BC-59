/* 
Напиши функцию calcBMI(weight, height) которая рассчитывает и 
возвращает индекс массы тела человека. Для этого необходимо разделить 
вес в киллограммах на квадрат высоты человека в метрах.

Вес и высота будут специально переданы как строки. Нецелые числа 
могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя 
дробной части может быть запятая.

Индекс массы тела необходимо округлить до одной цифры после запятой;
*/

// function calcBMI(weight, height) {
//   weight = +weight.replace(',', '.');
//   height = +height.replace(',', '.');
//   let summ = weight / height ** 2;
//   return summ.toFixed(1);
// }
// const bmi = calcBMI('88,3', '1.75');

// console.log(bmi); // 28.8

// ========================

// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b

// function min(a, b) {
//   return a > b ? b:a;
// }
// console.log(min(4,7));
// console.log(min(104,50));

// ============================

/* 
Напиши функцию getRectArea(dimensions) для вычисления 
площади прямоугольника со сторонами, значения которых 
будут переданы в параметр dimensions в виде строки. 
Значения гарантированно разделены пробелом.
*/
// function getRectArea(dimensions) {
//   dimensions = dimensions.split(' ');
//   const x = +dimensions[0];
//   const y = +dimensions[1];
//   return x * y;
// }
// console.log(getRectArea('2 5'));

//= ==========================

/* Напиши функцию logItems(items), которая получает 
массив и использует цикл for, который для каждого 
элемента массива будет выводить в консоль сообщение в 
формате <номер элемента> - <значение элемента>. 
Нумерация элементов должна начинаться с 1.

Например для первого элемента массива 
['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 
1 - Mango, а для индекса 2 выведет 3 - Ajax. */

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     if (i % 2 !== 0) console.log(`${i + 1} - ${items[i]}`);
//   }
// }
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ========================================

/* 
Напишите функцию calcAverage() которая принимает 
произвольное кол-во аргументов и возвращает их 
среднее значение. Все аругменты будут только числами. 
*/

/* function calAverage() {
  let total = 0;

  for (const arg of arguments) {
    total += arg;
  }

  return total / arguments.length;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); */

// ===========================================
// const arr = [4, 6, 8, 5, 4, 8, 9, 3];
// function minNoPair(arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (min > arr[i] && arr[i] % 2 !== 0) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log(minNoPair(arr));

// ===========================================

/* 
Напишіть функцію, яка приймає ціле число n та рядок s як
параметри та повертає рядок із s рівним повторенням n.
*/

/* function string(number, message) {
  let totalMessage = '';
  for (let i = 0; i <= number; i++) {
    totalMessage += message;
  }
  return totalMessage;
  //   return message.repeat(number);
}
console.log(string(10, 'Hi')); */

// =========================

/* ОПИС:
Напишіть простий парсер, який аналізуватиме та запускатиме 
Deadfish.

Deadfish має 4 команди, кожна з яких складається з 1 символу:

i - збільшує значення (спочатку 0)
d - зменшує значення
s - зводить значення в квадрат
o - виводить значення в масив, що повертається
Недійсні символи слід ігнорувати. */

// parse("iiisdoso") => [ 8, 64 ]

// [8, 64]
//
/* 
function parse(message) {
  let total = [];
  let current = 0;
  for (let i = 0; i < message.length; i += 1) {
    switch (message[i]) {
      case 'i':
        current += 1;
        break;

      case 'd':
        current -= 1;
        break;

      case 's':
        current **= 2;
        break;

      case 'o':
        total.push(current);
        break;
    }
  }
  return total;
}

console.log(parse('iiisdoso')); */

// ==================

/* Маючи число n, намалюйте сходи за допомогою літери 
"I", nвисокі та nширокі, з найвищими вгорі ліворуч. */

/* function drawStairs(n) {
  let resultString = '';
  for (let i = 0; i < n; i++) {
    resultString += ' '.repeat(i) + 'I\n';
  }
  resultString = resultString.slice(0, -1);
  return resultString;
}

console.log(drawStairs(5)); */

/* 
I
 I
  I
   I
    I
     I

*/

// =============================

/* Напиши функцию `formatTime(minutes)` которая переведёт 
значение `minutes`(количество минут) в строку в 
формате часов и минут `HH:MM`. */

/* function formatTime(minutes) {
  let hours = Number.parseInt(minutes / 60) + '';
  let minutesRest = (minutes % 60) + '';

    if(hours<10)hours = '0' + hours;
    if(minutesRest<10)hours = '0' + hours;

  return `${hours.padStart(2, '0')}:${minutesRest.padStart(2, 0)}`;
}
console.log(formatTime(720)); */

// =============================

/* 
Вивести швидкості рухомих об’єктів  у вигляді:
Рухомий об’єкт,
Швидкість у м/с

Рухомий об’єкт [Автобус ,Потяг,Пішохід,Літак,Човен]
Відстань [80 км,2 км,1 м,900 км,200 м]
Час руху [1 год,1 хв,1 с,1 год,1 хв]
*/

// ==============================

const arr = [
  ['1', '#', '#', '#', '#'],
  ['2', '#', '#', '#', '#'],
  ['3', '#', '#', '#', '#'],
  ['4', '#', '#', '#', '#'],
  ['5', '#', '#', '#', '#'],
  ['6', '#', '#', '#', '#'],
];

function showArr(arr) {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    result += arr[i].join(' ') + '\n';
  }
  console.log(result);
}

function transform(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      /* if (
        i === 0 ||
        i === arr.length - 1 ||
        j === 0 ||
        j === arr[i].length - 1
      ) {
        arr[i][j] = '#';
      } else {
        arr[i][j] = ' ';
      } */
      /*   if (i > j || j < arr[i].length / 2) {
          arr[i][j] = '*';
        } else {
          arr[i][j] = ' ';
        } */
      /* if (i) {
        arr[i][j] = '#';
      } else {
        arr[i][j] = ' ';
      } */
    }
  }
}

transform(arr);
showArr(arr);
