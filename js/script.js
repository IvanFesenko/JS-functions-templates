"use strict";

const runBtn = document.getElementById("run-script");

//Сортировка строки по цифре в слове
//4of Fo1r pe6ople g3ood th5e the2
const sortString = function (str) {
  // const arr = str.split(" ");
  // const result = [];
  // let i = 1;
  // do {
  //   for (let val of arr) {
  //     if (val.includes(i)) {
  //       result.push(val);
  //     }
  //   }
  //   i++;
  // } while (result.length < arr.length);
  // return result.join(" ");

  const tempMemory = str.split(" ");
  let result = [];

  tempMemory.forEach(function (element, i) {
    let tempArr = element.split("");
    let elementMem = [];
    let index;
    tempArr.forEach(function (character, i) {
      elementMem.push(character);
      if (!isNaN(Number(character))) {
        index = character;
      }
    });
    let resElement = elementMem.join("");
    result[index - 1] = resElement;
  });
  return result.join(" ");
};

// По заданному массиву найдите целое число, которое встречается нечетное количество раз.
// Всегда будет только одно целое число, которое встречается нечетное количество раз.
function findOdd(A) {
  const sortedArr = A.slice().sort();
  let calc = 0;
  for (i = 0; i < sortedArr.length; i++) {
    for (ii = 0; ii < sortedArr.length; ii++) {
      if (sortedArr[i] === sortedArr[ii]) {
        calc++;
      }
    }
    if (calc % 2 !== 0) return sortedArr[i];
  }
}

//Найти отличное по чётности значение в строке
const IQtest = (numbers) => {
  const arr = numbers.split(" ");
  const evenNums = []; //чётные
  const oddNums = []; //не чётные
  for (const val of arr) {
    if (+val % 2 !== 0) {
      oddNums.push(val);
    } else {
      evenNums.push(val);
    }
  }
  // if (oddNums.length > evenNums.length) {
  //   return arr.indexOf(evenNums[0]) + 1;
  // } else {
  //   return arr.indexOf(oddNums[0]) + 1;
  // }
  return oddNums.length > evenNums.length
    ? arr.indexOf(evenNums[0]) + 1
    : arr.indexOf(oddNums[0]) + 1;
};

//Суммирование 2-х массивов
const sumArrays = function (arr1, arr2) {
  const arr = arr1.concat(arr2);
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const createPhoneNumber = function (numbers) {
  const n = numbers;
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
};

// реализовать разностную функцию, которая вычитает один список из другого и возвращает результат.
// Следует удалить все значения из списка a, которые присутствуют в списке b.
function arrayDiff(a, b) {
  let result = [];
  for (i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
  //Best practice
  return a.filter((e) => !b.includes(e));
}

function alphabetPosition(text) {
  const alphabert = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let result = "";
  for (const symb of text) {
    const key = symb.toLowerCase();
    if (key in alphabert) {
      result += `${alphabert[key]} `;
    }
  }
  return result.slice(0, result.length - 1);
  //best practice
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}

const stringFilter = (value) => typeof value === "string";

const positiveNumberFilter = function (value) {};
const nonEmptyArrayFilter = function (value) {};

const customFilter = (...args) => {
  const result = [];
};

const Counter = (initial = 0) => {
  let counter = initial;
  return () => {
    return counter++;
  };
};

runBtn.addEventListener("click", () => {
  // console.log("someFunction");
  // console.log(sortString("4of Fo1r pe6ople g3ood th5e the2"));
  // console.log(sortString("is2 Thi1s T4est 3a"));
  // console.log(
  //   findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
  // );
  // console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
  // console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
  // console.log(findOdd([10]));
  // console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
  // console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
  // console.log(IQtest("2 4 7 8 10"));
  // console.log(IQtest("1 2 2"));
  // console.log(IQtest("1 2 1 1"));
  // console.log(sumArrays([1, 2, 3], [4, 5, 6]));
  // console.log(sumArrays([0, 0, 0], [4, 5, 6]));
  // console.log(sumArrays([100, 200, 300], [400, 500, 600]));
  // console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
  // console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
  // console.log(createPhoneNumber([2, 0, 6, 5, 4, 0, 3, 4, 9, 0]));
  // console.log(arrayDiff([-16,-13,-17,19,-11,-2,0,2,12,7,5,-15,-12,5,0,14,2],[-11,19,12,-12,2,-15]));
  // console.log(arrayDiff([18,10,17,-15,7,-6,7,2,6],[7,17]));
  // console.log(arrayDiff([6,20,9,5,19,15,19,8,-12],[5,9,-12,6,15]));
  // console.log(alphabetPosition("The sunset sets at twelve o' clock."));
  // console.log(alphabetPosition("The narwhal bacons at midnight."));
  console.log(customFilter(1, 2, 3, "4", 5, undefined, "string"));
  console.log(customFilter(1, 2, 3, "4", 5, undefined, "string", stringFilter)); // ["string", "4"]
  console.log(
    customFilter(1, 2, 3, "4", 5, -5, undefined, "string", positiveNumberFilter)
  ); // [1, 2, 3, 5]
  console.log(
    customFilter(
      1,
      2,
      "string",
      undefined,
      [1],
      [],
      [112, 1234],
      [],
      nonEmptyArrayFilter
    )
  ); // [[1], [112, 1234]]
});
