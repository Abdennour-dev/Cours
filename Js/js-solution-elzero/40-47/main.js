// ##############################################################################
console.log("%cActivity 01", "color:red;");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
myFriends.pop()

// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
myFriends.length = num ;
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


// ##############################################################################
console.log("%cActivity 02", "color:red;");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop()

console.log(friends); // ["Eman", "Osama"]


// ##############################################################################
console.log("%cActivity 03", "color:red;");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr =arrTwo.concat(arrOne).sort()


console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// ##############################################################################
console.log("%cActivity 04", "color:red;");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2,6).toUpperCase()); // ZERO

// ##############################################################################
console.log("%cActivity 05", "color:red;");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
haystack.unshift(needle)
console.log(haystack)
// haystack = haystack.reverse().concat(needle); --1  
// haystack.unshift(needle); --2
// haystack.reverse().push(needle);  --3


// ##############################################################################
console.log("%cActivity 06", "color:red;");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().join("").slice(4,7).toLowerCase();

console.log(allArrs); // fxy

// ################################ video 47 ################################ 
console.log("%cActivity video 47", "color:red;");

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.length = my.length - 2; my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(1,3)); // ["Elham", "Mazero"]
console.log((my.slice(1,3))[0].substr(0,2)+""+(my.slice(1,3))[1].substr(2,6)); // "Elzero"
let wr = (my.slice(1,3))[0].substr(0,2)+""+(my.slice(1,3))[1].substr(2,6) ;
console.log(wr.substr(-2,1)+""+wr.substr(-1,1).toUpperCase()); // "rO"
