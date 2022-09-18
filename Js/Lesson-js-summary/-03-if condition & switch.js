/*
##########################################################

 - #031 - Comparison Operators
 ------------------------------
 في هذا الشطر نحن نقارن القيمة 
 Equal  ==  : exp console.log("10" == 10 )//true  
 Not equal != : exp console.log("10"  != 10 )//false 

هنا نقارن القيمة ونوع البيانات
 Identical === : exp console.log("10" === 10 )//false 
 Not identical !== : exp console.log("10" !== 10 )//true

هنا نقارن بطريقة عادية 
 > Larger than : exp console.log("10" > 10 )//false
 >= Larger than or equal : exp console.log("10" >= 10 )//true
 
هنا نقارن بطريقة عادية 
 < Smaler than : exp console.log("10" < 12 )//true
 <= Smaler than or equal : exp console.log("10" <= 10 )//true

 ##########################################################

- #032 - Logical Operators
---------------------------
Not ! : معناها ليس

exp : console.log(true)//true - not - console.log(!true)//false

And &&  : معناها و

exp : console.log(10 == "10" && 10 < 15)//true

Or || : معناها أو 

exp : console.log(10 == "10" || 10 < 15)//true

##########################################################

- #033 - If Conditions
-----------------------------
if( هنا نكتب الشرط ){

هنا ما يحصل اذا حصل الشرط

}else if( هنا الشرط الثاني ){

اذا لم يتحقق الشرط الاول
يتحقق حاصل الشرط الثاني

}else{

هنا ما سيحصل اذا لم يتحقق كل من الشرطين الاولين

}

exp : 

let price = 100, discount = true , discountamount = 30 , country = "algeria" ;

if(discount == true){
  price -= discountamount;
}else if (country = "algeria"){
 price -= 50;
}else{
  price -= 10;
}
console.log(price)// 70 ظهرت هذه النتيجة لان الشرط الاول تحقق 

##########################################################

- #034 - Nested If Condition
-----------------------------------
سنأخذ نفس شروط الاول

exp :

let price = 100, discount = true , discountamount = 30 , country = "algeria" , student = true;

if(country =="algeria"){

  if(student == true){
  price -= discountamount +50;
  }else{
     price -= discountamount + 10;
  }
}
console.log(price)//80 تحقق شرط الطالب وتم انقاص 80 بالمئة من الثمن 
##########################################################

- #035 - Conditional Ternary Operator
---------------------------------------
// condition ? if true : if false 

سنقوم باخذ مثال عن الكتابة المختصرة للشروط 

exp :

let nm ="abdennour" , gn = "male" , ag =27 ; 

gn ==="male"  الشرط

? console.log(`hello mrs ${nm}`); حاصل الشرط

:console.log(`hello miss`); اذا لم يتحقق الشرط يحصل هذا 

##########################################################

- #036 - Nullish Coalescing Operator And Logical Or
----------------------------------------------------
1-Nullish Coalescing Operator 
exp : Null + Undefined الشرط
let price = null ;
console.log(`the price is ${price ?? 200}`)// 0     في وجود القيمة المشروطة ومع استعمال رمزي الاستفهام ستظهر النتيجة 0 

2-Logical Or
exp: Null + Undefined + Any Falsy Value الشرط
let price = 0 ;
console.log(`the price is ${price || 200}`)// 200      في وجود القيمية المشروطة ومع استعمال رمز ال أو ستظهر نتيجة 200  
##########################################################

- #038 - Switch Statement
----------------------------
switch(expression){
  case1 : 
  // code block
  break ;
  case2 : 
  // code block
  break ;
  case3 : 
  // code block
  break ;
  default :
}

exp : 
let day = 2 ; //سيظهر لنا يوم الاثنين
let day = 3 ; // multiple match سيظهر لنا يوم الاثنين وهذه الطريقة الاكثر من اسدعاء 
let day = 6 ; // ستظهر رسالة هذا يوم غير معروف لان 6 غير موجودة داخل السويتش 
switch(day){
  case 0: 
  console.log("السبت")
  break ;
  case 1: 
  console.log("الاحد")
  break ;
  case 2: 
  case 3: 
  console.log("الاثنين")
  break ;
  default:
     console.log("هذا يوم غير معروف")
}
##########################################################

*/
