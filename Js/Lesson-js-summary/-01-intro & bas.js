/*
- #007 - Output To Screen
-------------------------------
// window.alert() لاظهار نافذة
// document.write() للاظهار على الصفحة 
// console.log() للاظهار على كونصول المتصفح

##########################################################

- #008 - Console Methods And Styling And WebAPI
------------------------------------------------
 -log : لاظهار اي شيء على كونصول المتصفح
 exp : 
  console.log("hello")
 -error : لاظهار رسالة خطأ
 exp :
  console.error("error")
 -table : لانشاء جدول
 exp : 
  console.table(["abdennour","walid","maroua","nadjiba","fatima"])
 - web api : لقد افردنا له بحثا خاصا في جهة اخرى
 ..styling console
 -directive %c : نجعلها قبل الكلمة التي نود ان نضيف عليها تأثيرا 
 exp :
  console.log("%c hello","color:red;")

##########################################################

- #010 - Data Types And Typeof Operator
-----------------------------------------
Data rypes intro:
typeof : نستعملها لنعرف نوع البيانات
 1-string : حروف
 exp : 
  console.log(typeof "hello")
 2-number : ارقام
 exp:
  console.log(typeof 27)
  console.log(typeof 27.5)
 3-array ==> object : المصفوفة
 exp:
  console.log(typeof [12,08,1995])
 4-object : كائن
 exp:
  console.log(typeof {day:12,month:08,year:1995})
 5-boolean : true & false :صح ام خطأ
 exp:
  console.log(typeof true)
 6-undefined : غير معرف
 exp:
  let test;
  console.log(typeof test)
 7-null : فارغ
 exp:
 var age=null;
  console.log(typeof age) //object 
##########################################################

- #011 - Variables Introduction
-----------------------------------
exp:
1- استدعاء عادي
var user = "abdennour"
console.log(user)

2-id من طرف html استدعاء من ملف 
<h1 id='name'>hello my teacher</h1>
console.log(name) // hello my teacher

3-التعديل على مايظهر
name.innerhtml = "hello my father";
console.log(name) //hello my father

- #012 - Identifiers Name Conventions And Rules
----------------------------------------------------
-nameCamel : طريقة تسمية سنم الجمل
exp:
var myTemplate = "general"
-snake_name : طريقة تسمية الافعى
exp:
var my_template = "general"
##########################################################

- #013 - Var, Let, Const Compare
----------------------------------
 /// redeclare سنجري مقارنة ///
var  : 

1-redeclare (نعم نستطيع)
exp : 
var a = 1;
var a = 2 ;
console.log(a); // 2 

let & const :

1-redeclare (لا نستطيع)
exp : 
let a = 1;
let a = 2 ;
console.log(a);
const a = 1;
const a = 2 ;
console.log(a); // error لا نستطيع 

/// access before declare مقارنة /// 
var  : 

2-access before declare (undefined)
exp : 
console.log(b); //undefined
var b = 1;

let & const :

2-access before declare()
exp : 
-let
console.log(b); //error  يقول لازم ديلير قبل الكونصول
let b = 1;
-const
console.log(b); //error  يقول لازم ديلير قبل الكونصول
const b = 1;

///  variable scope drama مقارنة  ///
var :

3-variable scope drama (window اي متغير يضاف الى )

let & const :

3-variable scope drama ( window لا يمكن ان يضاف الى )

##########################################################

- #014 - String Syntax And Character Escape Sequences
------------------------------------------------------
\ : escape+line continue  " " '' نستخدمه لتفادي ظهور مشاكل
exp : 
 console.log("hello \'my father\'")

\n: escape نستخدمه لتخطي سطر
exp:
 console.log("hello \n world") 

##########################################################

- #015 - Concatenation
-------------------------
<<<<<<< HEAD
exp :
let a = "my name";
let b = "is abdennour";
console.log(a+" "+b) // my name is abdennour

##########################################################

- #016 - Template Literals Template Strings
-----------------------------------------------
exp:
let a = "my name";
let b = "is abdennour";
console.log(`${a} ${b}`) // my name is abdennour

##########################################################

- #018 - Arithmetic Operators
------------------------------
+ : addition ,exp : console.log(10 + 20) //30

- : subtraction ,exp : console.log(15 - 5) //10

* : multiplication ,exp : console.log(5 * 5) //25

/ : division ,exp : console.log(40 / 8) //5

% : modulus ,exp : console.log(10 / 8) //2

** : exponentiation , exp : console.log(2**2) //4

++ : increment [post / pre] ,

exp : a = 10;

 post ==> console.log(a++) //ستظهر النتيجة 10 ولكن عند استدهاء المتغير مرة اخرى تظهر النتيجة 11 اي انها تضيف واحد للمتغير وعند الاستدعاء مرة اخرى تظهر 11
 pre ==> console.log(++a) //تظهر مباشرة 11

-- : decrement [post / pre] ,

exp : b = 5 ;

 post ==> console.log(b--) //تظهر 5 ولكن عند استدعاء مرة اخرى تظهر 4
 pre ==> console.log(--b) //4

##########################################################

- #019 - Unary Plus And Negation Operators_2
----------------------------------------------
- Unary Plus :
normal number :exp: console.log(100) //100

string number :exp: console.log(+"100") //100

string negative number :exp: console.log(+"-100") //-100

string text :exp: console.log(+"abdennour") //nan

float :exp: console.log(+15.5) //15.5

hexadecimal numeral system => 0xff exp: console.log(+0xff) //255

null : exp: console.log(+null) //0

false: exp: console.log(+false) //0

true : exp: console.log(+true) //1

- Unary negation :

normal number :exp: console.log(-100) //-100

string number :exp: console.log(-"100") //-100

string negative number :exp: console.log(-"-100") //+100

string text :exp: console.log(-"abdennour") //nan

float :exp: console.log(-15.5) //-15.5

hexadecimal numeral system => 0xff exp: console.log(-0xff) //-255

null : exp: console.log(-null) //-0

false: exp: console.log(-false) //-0

true : exp: console.log(-true) //-1

##########################################################

- #020 - Type Coercion
------------------------
-exp :
let a ="10";
let b = 20;
let c = true;
console.log(a + b)//30
console.log(a - b)//-10
console.log("" - b)//-20
console.log(false - true)//-1 

##########################################################

- #021 - Assignment Operators
------------------------------
-exp : let a = 10;
a = a + 20; ====> console.log(a += 20)//30
a = a - 20; ====> console.log(a -= 20)//-10
a = a * 20; ====> console.log(a *= 20)//200




*/
