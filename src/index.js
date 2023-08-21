function task1(cars) {
  const task_1 = cars.filter(el => el.price > 25000);
  console.log(task_1);
}
function task2(cars) {
  const task_2 = cars.filter(({ color }) => color === 'Green');
  console.log(task_2);
}

const task3 = cars => {
  const allSportsCars = cars.filter(({ isSportCar }) => isSportCar);
  console.log(allSportsCars);
};
const task4 = cars => {
  const task_4 = cars.filter(({ year }) => year === 2022).length;
  console.log(task_4);
};

const task5 = cars => {
  const task_5 = [...cars].sort((a, b) => {
    if (a.price === b.price) {
      return a.amount - b.amount;
    } else {
      return a.price - b.price;
    }
  });
  console.table(task_5);
};

const task6 = cars => {
  const task_6 = [...cars].sort((a, b) => a.year - b.year);
  console.table(task_6);
};

/* 
Найти самую дорогую машину.
Найти все машины заданной марки (например, Toyota).
Посчитать общее количество машин всех типов.
Найти все машины определенного цвета и года выпуска.
Посчитать среднюю цену всех машин.
Найти все машины, у которых количество на складе больше 0.
Найти все машины с ценой меньше 30000 и годом выпуска после 2020.
Посчитать суммарное количество всех машин заданной марки.
Отсортировать машины по количеству на складе (от наибольшего к наименьшему).
*/

const task7 = cars => {
  const task7Result = cars.reduce((maxCar, currentCar, index, array) => {
    if (maxCar.price > currentCar.price) return maxCar;
    else {
      return currentCar;
    }
  });
  console.log(task7Result);
};

const task8 = cars => {
  const task_8 = cars.filter(el => el.brand === 'Toyota');
  console.log(task_8);
};

const task9 = cars => {
  const task_9 = cars.reduce((acc, el) => acc + el.amount, 0);
  console.log(task_9);
};
// task9(cars);

/* 
Отсортировать машины по цене (от самой дешевой до самой дорогой).
Найти все машины определенного типа (например, SUV).
*/

/* 
Найти все машины определенного цвета и года выпуска.
Посчитать среднюю цену всех машин.
Найти все машины, у которых количество на складе больше 0.
Найти все машины с ценой меньше 30000 и годом выпуска после 2020.
Посчитать суммарное количество всех машин заданной марки.
Отсортировать машины по количеству на складе (от наибольшего к наименьшему).
*/

const task10 = cars => {
  const task_10 = [...cars].sort((a, b) => a.brand.localeCompare(b.brand));
  console.table(task_10);
};

const task11 = cars => {
  const task_11 = cars.filter(el => el.type === 'SUV');
  console.log(task_11);
};
const task12 = (cars, color, year) => {
  const task_12 = cars.filter(el => {
    return el.color === color && el.year === year;
  });
  console.log(task_12);
};

const task_13 = cars => {
  const total = cars.reduce((acc, el) => {
    return acc + el.price;
  }, 0);
  console.log(total / cars.length);
};

/* 
Найти все машины, у которых количество на складе больше 0.
Найти все машины с ценой меньше 30000 и годом выпуска после 2020.
*/

/*
Знайти цсі авто 2022 року та вивести масив лише марок цих автомобілів 
 */

// const task17 = cars => cars.filter(el => el.year === 2022).map(el => el.model);

// console.log(task17(cars));

// const task18 = cars => {
//   const task_18 = cars.some(el => {
//     console.log(el);
//     return el.year === 2021;
//   });
//   console.log(task_18);
// };
// task18(cars);
// const task14 = cars => {
//   const task_14 = cars.filter((el, idx, arr) => {
//     return el.amount > 3;
//   });
//   console.log(task_14);
// };

// const task15 = cars => {
//   const task = cars.filter((el, idx, arr) => {
//     return el.price < 30000 && el.year > 2020;
//   });
//   console.log(task);
// };

// const task16 = cars => {
//   const task_16 = cars.every(el => el.price > 100000);
//   console.log(task_16);
// };
// task16(cars);

/* 
{
    brand: 'Toyota',
    model: 'Camry',
    year: 2019,
    color: 'Silver',
    price: 25000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  }
*/
/* 
{
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 28,
    email: 'alice@example.com',
    isActive: true,
    gender: 'Female',
  }
 */
