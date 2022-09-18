/*

- #071 - Higher Order Functions - Map
----------------------------------------
Higher Order Functions
> is a function that accepts functions as parameters and/or returns a function.
- - Map
method creates a new array
populated with the results of calling a provided function on every element
in the calling array.
Syntax map(callBackFunction(Element, Index, Array){}, thisArg)
- Element => The current element being processed in the array.
- Index = > The index of the current element being processed in the array.
- Array = > The Current Array
Notes
- Map Return A New Array
Examples
- Anonymous Function
- Named Function

##########################################################

- #072 - Higher Order Functions - Map Practice
------------------------------------------------
-MAP :
- swap cases
- inverted numbers
- ignore numbers value

map مثال عملي على 

1)example :

المطلوب ارجاع الحروف الكبيرة الى صغيرة 

let swappingCases = "elZERo" ;

let sw = swappingCases.split("").map(function (ele){

// Condition ? True : False
return ele === ele.toUpperCase()? ele.toLowerCase(): ele.toUpperCase();

}.join("");

console.log(sw);// ELzerO   ونكون قد حللنا المشكل 


2)example :

جعل كل رقم موجب سالب والعكس صحيح 

let invertedNumbers = [1, -10, -20, 15, 190, -39] ;

let inv = invertedNumbers.map(function(ele){

  returne -ele;

});

console.log(inv); // [-1, 10, 20, -15, -190, 39]  ونكون قد حللنا المشكل 

3)example :

اظهار العبارة دون ارقام

let ignoreNumbers = "Elzl23er4o";

let ign = ignoreNumbers.split("").map(function(ele){

return isNaN(parseInt(ele))? ele : "";

}.join(""));

console.log(ign)// Elzero ويتم حل المشكل والنتيجة هاهي


##########################################################

- #073 - Higher Order Functions - Filter
------------------------------------------
- - Filter
method creates a new array
- with all elements that pass the test implemented by the provided function.
Syntax filter (callBackFunction ( Element, Index, Array ) { }, thisArg)
- Element => The current element being processed in the array *
- - Index = > The index of the current element being processed in the array.
Array => The Current Array

1)-- example :

// اجمعلي كل رقم بنفسو 
let numbers = [11, 20, 2, 5, 17, 10];

 مثال نبين فيه الفرق بين استعمال  
 map and filter

 // Test Map vs Filter

let addMap = numbers.map(function (el) {
return el + el;
};

console.log(addMap); // [22, 40, 4, 10, 34, 20] قامت بجمع كل عدد بنفسه

let addFilter = numbers.filter(function (el) {
return el + el;
};

console.log(addFilter) ; // [11, 20, 2, 5, 17, 10]  بقيت كما هي وانما قامت بتست فقط 


2)-- example :

// Get Friends With Name Starts With A - A أعطني الاسماء التي تبدأ بحرف

let friends = [ Ahmed , "Sameh", "Sayed ", "Asmaa", "Amgad ", "Israa"];

let filterdFriends = friends.filter( function(el) {

return el.startsWith("A")? true : false;

});

console.log(filterdFriends) ;

3)-- example :

// Get Even Numbers Only , أعطني الارقام الزوجية فقط 

let numbers = [11, 20, 2, 5, 17, 10] ;

let evenNumbers = numbers.filter(function (el){

return el % 2 === 0 ;

};

console.log(evenNumbers) ;


##########################################################

- #074 - Higher Order Functions - Filter Practice
---------------------------------------------------
1) example :

// Filter Words More Than 4 Characters : انزع الكلمات التي يفوق عدد حروفها 4

let sentence = " I Love Foood Code Too Playing Much ";
let smallWords = sentence.split(" ").filter(function(ele){
return ele.length <= 4;
}).join("");

console.log(smallWords) ;

2) example : 

// Filter Strings + Multiply : اظهر الارقام من العبارة واضرب كل رقم في نفسه 

let mix = "A13BS2ZX";
let mixedContent = mix.split("").filter(function (ele) {
return !isNaN(parseInt(ele));
}).map(function (ele) {
return ele * ele;
}).join("");

console.log(mixedcontent) ;

##########################################################



*/