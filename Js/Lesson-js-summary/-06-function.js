/*
- #057 - Function Intro And Basic Usage
-----------------------------------------
Function----
- What Is Function ?
- User-Defined vs Built In
- Syntax + Basic Usage
- Example From Real Life
- Parameter + Argument
- Practical Example
--------------------------------

exp: 

function nameOffunction(parameterName){
  console.log(`hello my name is ${parameterName}`);
}
nameOffunction("abdennour");// هنا نستدعي الدالة وداخلها نضع قيمة الباراميتر 

############################################################

- #058 - Function Advanced Examples
--------------------------------------
exp:

function sayHello(userName, age){

if(age < 20){
console.log ( 'App is Not Suitable For You') ;
} else {
console.log ( `Hello ${userName} Your Age is ${age}`) ;
}

sayHello("Osama", 38) ;
sayHello ("Sayed", 40) ;
sayHello ("morad", 18) ; // مثال جيد عن الدوال

function generateYears(start, end, exclude){
for(let i = start; i <= end; i++){
if(i === exclude){
continue;
}
console.log(i) ;
}
}
generateYears (1982, 2021, 2020) ;// مثال مع استثناء سنة 2020

############################################################

- #059 - Function Return And Use Cases
--------------------------------------
function
- Return
- Automatic Semicolon Insertion [No Line Terminator Allowed]
- Interruptting

function calc(num1, num2){
return num1 + num2;
}
let result = calc(10, 20) ;
console.log(result + 100) ; // مثال خفيف يبين دور ريتورن 

function generate(start, end){
for(let i = start; i <= end; i++){
if(i === 15){
return 'Interrupting';
}
console.log(i);
}
generate(10, 20);

############################################################

- #060 - Function Default Parameters
--------------------------------------
Function
- Default Function Parameters
- Function Parameters Default [Undefined]
- Old Strategies [Condition + Logical Or]
- ES6 Method

function sayHello(username = Unknown", age = "Unknown") {
// if (age === undefined){
// age - "Unknown";
// }
// age = age || "Unknown";
return 'Hello ${username} Your Age Is ${age} ';
}
console,log{sayHello());

############################################################

- #061 - Function Rest Parameters
--------------------------------------
function calc(...numbers) {// argument نستعمل هذه الطريقة عندما لا نعرف عدد  
let result = 0;
for (let i = 0 ;i < numbers.length;i++) {
result += numbers[i]; // result = result + numbers[i]
}
return `Finale Result Is ${result}`;
}
console.log(calc (10, 20, 10, 30, 50) );// البرنامج سيجمع كل اندكس مع نفسه

############################################################

- #062 - Function Ultimate Practice
--------------------------------------
- #062 - Function Ultimate Practice
--------------------------------------
Function Advanced Practice
Parameters
- Default
- Rest
- Loop
- Condition
function showlnfo(us = "Un" ag = "Un", rt = 0, show ="yes",...sk){
document.write(' <div >');
document.write(' < h2>WelcomeJ ${us}</h2> ');
document.write(' < p >Age: ${ag}</p >') ;
document.write('< p >Hour Rate: $${rt}</p>');
if(show === "Yes"){
if(sk.length > 0){
document.write( `<p>Skills: ${ sk.join("|") }</p>` ) ;
} else 2
document.write( `<p>Skills: No Skills</p>') ;
} else{
document.write('<p>Skills Is Hidden</p>') ;
}
document.write('</div >');
}
showInfo("Osama", 38, 26,"yes","html","css");
############################################################

- #064 - Anonymous Function And Practice
--------------------------------------
Function
- Anonymous Function
- Calling Named Function vs Anonymous Function
- Argument To Other Function
- Task Without Name
- SetTimeout
----------------
exp : امثلة لدوال بدون اسم مع اختال الحالات 
let calculator = function (num1; num2) {
return num1 + num2;
};
console.log(calculator (l0, 20) );// استعمال متغير 
// code html : <button id='show'>click</button>
document.getElementByld("show").onclick = function () {
console.log( "Show" ); // استعمال زر الضغط للاستدعاء
};
setTimeout (function elzero( ) {
console.log( "Good" );
}, 2000); // استخدام مؤقت دون استعمال اسم الدالة 
هذه حالات لا نستعمل اسم الدالة ولا نحتاجه اصلا 
############################################################

- #065 - Return Nested Function
--------------------------------------
Function
- Function Inside Function
- Return Function
-----------------
exp :
المثال الاول 
function sayMessage(fName,lName){
let message = 'Hello';
function concatMsg(){ // هذه هي الدالة الداخلية 
message = '${message} ${ fName} ${lName} ';
}
concatMsg();
return message;
}
console.log(sayMessage("Osama","Mohamed")) ; // hello osama mohamed هذه هي الرسالة التي ستطبع 

المثال الثاني
function sayMessage(fName,lName){
let message = 'Hello';
function concatMsg(){ // هذه هي الدالة الداخلية 
  return'${message} ${fName} ${lName} ';
}
return concatMsg();
}
console.log(sayMessage("Osama","Mohamed")) ; // 

المثال الثالث
function sayMessage(fName,lName){
let message = 'Hello';
function concatMsg(){ // هذه هي الدالة الداخلية 
  function getFullName(){// اضفنا دالة جديدة
    return'${fName} ${lName} ';
  }
  return'${message} ${getFullName()}';// ادخلنا الدالة هنا
}
return concatMsg();
}
console.log(sayMessage("Osama","Mohamed")) ; // 
############################################################

- #066 - Arrow Function Syntax
--------------------------------------
Function
- Arrow Function
- Regular vs Arrow [ Param + No Param ]
- Multiple Lines
-----------
exp:
regular:
-------
مثال 01
let print = function ( ) {
  return 10;
};
console.log(print());

مثال 02
let print = function (num) {
  return num;
};
console.log(print(100));

مثال 03
let print = function (num1,num2) {
  return num1 + num 2;
};
console.log(print(100,50));

arrow:
-------
مثال 01
let print = ( ) =>{
  return 10;
};
console.log(print());
في حالة سطر واحد يمكننا كتابتها ايضا بالطريقة التالية 
let print = ( ) => 10; //  _ ملاحظة يمكننا استبدال مكان القوسين بعلامة 
console.log(print());

مثال 02
let print =(num) => {
  return num;
};
let print = num => num; في حالة سطر واحد وفي حالة بارامتر واحد
console.log(print(100));

مثال 03
let print = (num1,num2) => {
  return num1 + num 2;
};
console.log(print(100,50));
let print = (num1,num2) => num1 + num 2; في حالة وجود باراميترين وسطر واحد طبعا 
console.log(print(100,50));

############################################################

- #067 - Scope - Global And Local
--------------------------------------
Scope
- Global And Local Scope
-------------------
var a = 1; // global
let b = 2;

function showText( ){
    var a = 10; // local
    let b = 20;
    console.log('Function - From Local ${a}')
    console.log('Function - From Local ${b}' ); // الدالة تبحث اولا عن المتغيرات من الداخل ان لم تجدهم تبحث خارجها
      }
console,log('From Global ${a}');
console.log('From Global ${b}'); // الامر العادي يبحث عن المتغيرات في محيطه اما داخل الدوال فلا يبحث 

showText();

############################################################

- #068 - Scope - Block
--------------------------------------
 block scope [ if , switch , for ] 
 -------------------------------------
var x = 10;
if (10 === 10) {
let x = 50;
console.log('From If Block );
}
console.log('From Global ${x}') ;

############################################################

- #069 - Scope - Lexical (Static)
--------------------------------------
Scope
- Lexical Scope
Search
- Execution Context
- Lexical Environment
------------------------
function parent(){
let a = 10;
  function child(){
  console.log{a);
  console.log('From Child ${b}');
    function grand() {
    let b = 100;
    console.log('From Grand ${a}') ;
    console.log('From Grand ${b}');
    }
    grand();
    }
  child();
  }
parent();

*/