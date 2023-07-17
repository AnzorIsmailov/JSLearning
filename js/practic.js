'use strict';

console.log(NaN || 2 || undefined); //! = 2
console.log(NaN && 2 && undefined); //! = NaN
console.log(1 && 2 && 3); //! = 3
console.log((!1 && 2) || !3); //! = fals
console.log(25 || (null && !3)); //! = 25
console.log(NaN || null || !3 || undefined || 5); //! = 5
console.log(NaN || (null && !3 && undefined) || 5); //! = 5
console.log((5 === 5 && 3 > 1) || 5); //! = true

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
  console.log('Done!');
}

function aswe() {
  let hamburger;
  const fries = NaN;
  const cola = 0;
  const nuggets = 2;

  if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!');
  }
  console.log(hamburger || cola || fries === 3 || nuggets);
}

function as() {
  let hamburger;
  const fries = NaN;
  const cola = 0;
  const nuggets = 2;

  if ((hamburger && cola) || (fries === 3 && nuggets)) {
    console.log('Done!');
  }
}

function firstTask() {
  //* При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
  let i = 5;
  while (i <= 10) {
    console.log(i);
    i++;
  }

  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
}

function secondTask() {
  //* При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
  for (let i = 20; i >= 10; i--) {
    console.log(i);
    if (i <= 13) {
      break;
    }
  }
}

function thirdTask() {
  //* При помощи цикла for выведите чётные числа от 2 до 10 включительно
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

function fourthTask() {
  //*Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть Цикл, который нужно переписать
  for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
      continue;
    } else {
      console.log(i);
    }
  }

  let i = 2;
  while (i < 16) {
    if (i % 2 === 0) {
      i++;
      continue;
    } else {
      console.log(i);
    }
    i++;
  }
}

function fifthTask() {
  const arrayOfNumbers = [];
  //* Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

  for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[i - 5] = i;
  }
  console.log(arrayOfNumbers);

  return arrayOfNumbers;
}

function firstTask1() {
  //*Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд. Должен получиться точно такой же массив

  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }
  console.log(result);

  // Не трогаем
  return result;
}

function secondTask2() {
  //*   Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
  //* Для определения типа данных используйте typeof();
  //* Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
      data[i] = data[i] * 2;
    } else {
      data[i] = `${data[i]} - done`;
    }
  }
  console.log(data);

  return data;
}

function thirdTask3() {
  //* Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
  //* Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i];
  }
  console.log(result);

  // Не трогаем
  return result;
}

function fourthTask4() {
  const lines = 5;
  let result = '';

  for (let i = 1; i < lines; i++) {
    for (let j = lines; j > i; j--) {
      result += '0';
    }
    for (let k = 1; k < i; k++) {
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
}
