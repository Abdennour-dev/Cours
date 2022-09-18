/*

- #075 - Higher Order Functions - Reduce
-----------------------------------------

- Reduce
method executes a reducer function on each element of the array,
resulting in a single output value.
Syntax
reduce(callBackFunc(Accumulator > Current Val, Current Index, Source Array){} , initialValue)
- Accumulator => the accumulated value previously returned in the last invocation
- Current Val => The current element being processed in the array
- Index => The index of the current element being processed in the array.
-starts from index 0 if an initialValue is provided.
Otherwise, it starts from index 1.
- Array => The Current Array
exp :

let nums = [10, 26, 15, 39];

let add = nums.reduce(function (acc, current, index, arr) {

console.log( `Acc = > ${acc} `) ;

console.log(`Current Element = > ${current}`);

console.log(`Current Element Index = > ${index}`);

console.log(` Array = > ${arr} `);

console.log(acc + current);

console.log('############# ') ;

return acc + current;

}, 5);

console.log(add) ;

############################################################

- #076 - Higher Order Functions - Reduce Practice
--------------------------------------------------
exp:  

اختيار اطول كلمة 
let theBiggest = [ "Bla","Propaganda", "Other", "AAA", "Battery", "Test"] ;
let check = theBiggest ,reduce(function (acc, current) {
console.log('Acc => ${acc} ');
console.log('Current Element -> ${current} ');
console.log(acc + current);
console.log('#############');
return acc.length > current.length ? acc : current;
});
console.log(check) ;
---------------------------
@  حذف  
وجمع الحروف لتكوين كلمة 
ELZERO
let removechars = ["E","@","L","@","Z","@","E","@","R","@","O","@"] ;
let finalstring = removechars
.filter(function (ele) {
return !ele.startsWith("@")
})
.reduce(function {acc, current){
return '${acc}${current}';
});
console.log(finalstring);

############################################################

- #077 - Higher Order Functions - ForEach And Practice
--------------------------------------
- forEach
method executes a provided function once for each array element.
Syntax forEach(callBackFunction(Element, Index, Array){} , thisArg)
- Element => The current element being processed in the array.
- Index -> The index of the current element being processed in the array.
- Array => The Current Array 
Mote
- Ooesnt Return Anything [Undefined]
- Break Will Not Break The Loop
--------------------------------------
exp : 

let allLis = document,querySelectorAll ("ul li") ;
let allDivs = document.querySelectorAll(".content div") ;
allLis.forEach(function(ele){
ele.onclick = function(){
// Remove Active Class From All Elements
allLis.forEach(function(ele){
ele.classList.remove("active") ;
});
// Add Active Class To This Element
this.classList.add( "active") ;
// Hide All Divs
allDivs.forEach(function(ele){ 
ele.style.display = "none";
});
};
});

*/