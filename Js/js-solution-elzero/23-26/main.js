// ##############################################################################

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

console.log("%cActivity 01", "color:red;");
// Your Solutions
console.log(1e5); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.trunc(100000.999)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(10 ** 5); // 100000
console.log(Number(100000.40.toFixed(0))); // 100000
console.log(Math.max(5000,800,100000)); // 100000
console.log(parseInt("100000.30")); // 100000
console.log(Math.round(parseFloat(100000.40))); // 100000

// ##############################################################################

console.log("%cActivity 02", "color:red;");
console.log(-Number.MIN_SAFE_INTEGER)
console.log(`${Number.MAX_SAFE_INTEGER}`.length)

// ##############################################################################

console.log("%cActivity 03", "color:red;");

let myVar = "100.56789 Views";

console.log(Math.trunc(parseFloat(myVar))); // 100
console.log((parseFloat(myVar)).toFixed(2)); // 100.57