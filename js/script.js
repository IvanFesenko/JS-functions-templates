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

runBtn.addEventListener("click", () => {
  console.log("someFunction");
  console.log(sortString("4of Fo1r pe6ople g3ood th5e the2"));
  console.log(sortString("is2 Thi1s T4est 3a"));
});
