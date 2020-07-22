"use strict";

const runBtn = document.getElementById("run-script");

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
  let curVal = sortedArr[0];
  let calcVal = 0;
  let bestCalcVal = 0;
  let bestResult = 0;
  for (const val of sortedArr) {
    if (val !== curVal) {
      calcVal = 0;
      curVal = val;
      calcVal++;
    } else {
      calcVal++;
    }
    if (calcVal > bestCalcVal) {
      bestCalcVal = calcVal;
      bestResult = val;
    }
  }

  return bestResult;
}

runBtn.addEventListener("click", () => {
  // console.log("someFunction");
  // console.log(sortString("4of Fo1r pe6ople g3ood th5e the2"));
  // console.log(sortString("is2 Thi1s T4est 3a"));
  console.log(
    findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
  );
  console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
  console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
  console.log(findOdd([10]));
  console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
  console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
});
