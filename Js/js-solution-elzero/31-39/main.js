// ##############################################################################
console.log("%cActivity 01", "color:red;");

console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 != 100 != 10 != 20); // true
console.log(-10 == "-10"); // true
console.log(- -50 >= +"-40"); // true
console.log(+ 10 <= -"-40"); // true
console.log(+"10" === 10); // true
console.log(+20 != false); // true

// ##############################################################################
console.log("%c بقية الحلول واضحة", "color:red;");

// ##############################################################################
console.log("%cActivity 02", "color:red;");

// Test Case 1
let num = 9; // "009"
if(num < 10){
    console.log(`the result is : 00${num}`)
}

// Test Case 2
let num2 = 20; // "020"
if(num2 > 10 && num2 < 100){
    console.log(`the result is : 0${num2}`)
}
// Test Case 3
let num3 = 110; // "110"
if(num3 >= 100){
    console.log(`the result is : ${num3}`)
}



// ##############################################################################
console.log("%cActivity 03", "color:red;");

let num4 = 9;
let str = "9";
let str2 = "20";
if(num4 == str){console.log(`"${num4} Is The Same Value As ${str}"`)}
if(num4 == str){console.log(`"${num4} Is The Same Value As ${str} But Not The Same Type"`)}
if(num4 != str2){console.log(`"${num4} Is Not The Same Value Or The Same Type As ${str2}"`)}
if(str != str2 | typeof str == typeof str2){
    console.log(`"${str} Is The Same Type As ${str2} But Not The Same Value"`)
}



console.log("%coperator لم اكمل باقي التمارين لانني فهمت الشروط وال  ", "color:red;");