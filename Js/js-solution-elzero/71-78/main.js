// ##############################################################################
console.log("%cActivity 01", "color:red;");

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// mix = mix.map((el) => (typeof el == "string" ? el : "")).reduce((el, current) => `${el}${current}`);

mix = mix
  .map(function (el) {
    if (typeof el == "string") {
      return el;
    } else {
      return "";
    }
  })
  .reduce(function (el, current) {
    return el + "" + current;
  });
console.log(mix);

// ##############################################################################
console.log("%cActivity 02", "color:red;");

let myString = "EElllzzzzzzzeroo";

let arr = myString
  .split("")
  .filter((el, i, arr) => el !== arr[i + 1])
  .join("");

console.log(arr);

// ##############################################################################
console.log("%cActivity 03", "color:red;");

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let array = myArray
  .map((el) => (Array.isArray(el) ? el.reduce((acc, curr) => acc + curr) : el))
  .join("");
console.log(array);

// Elzero

// ##############################################################################
console.log("%cActivity 04", "color:red;");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numsArr = numsAndStrings
  .filter((el) => typeof el == "number")
  .map((el) => -el);
console.log(numsArr);

// [-1, -10, 10, 20, -5, -3]

// ##############################################################################
console.log("%cActivity 05", "color:red;");

let nums = [2, 12, 11, 5, 10, 1, 99];
let num = nums.reduce((acc, curr) => {
  if (curr % 2 == 0) {
    return curr * acc;
  } else {
    return curr + acc;
  }
}, 1);
// 500
console.log(num);

//*
