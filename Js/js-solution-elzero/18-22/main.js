// ##############################################################################

console.log("%cActivity 01", "color:red;");
// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0

// ##############################################################################

console.log("%cActivity 02", "color:red;");

let num = 3;

// Solution One
console.log(num*(true+true)); // 3 * 2 = 6

// Solution Two
console.log(num+num); // 3 + 3 = 6

// Soultion Three
console.log((num**(true+true))-num); // 3^2 = 9 , 9 - 3 = 6

// Soultion Four
console.log((num*(num+num))/num); // 3 * 6 = 18 , 18 / 3 = 6

// Solution Five
console.log(((num+true)*num)/(num-true)); // 3 + 1 = 4 , 4 * 3 = 12 , 12 / 2 = 6

// Solution Six
console.log(((num*num*num)+num)/(num+true+true)); // 30 / 5 = 6

// ##############################################################################

console.log("%cActivity 03", "color:red;");
console.log("نفس فكرة الذي قبله")

// ##############################################################################

console.log("%cActivity 04", "color:red;");

let points = 10;

// Write Your Code Here

console.log(points + (true+true+true)); // 13

// Write Your Code Here

console.log(points +(-true-true)); // 8;


// ############################### video22 ########################################

console.log("%cActivity video 22", "color:red;");
/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
الامر واضح 

++ a = 11
-- a = 09 

a++ = 11 تبقى كما هي 
a = 12 في الاستدعاء القادم تظهر النتيجة المخزنة 
وهذه القاعدة على الجميع 
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(+e * -d); // 2000
console.log(-d + ++e * ++g + ++f); // 173
