/*
##########################################################

- #048 - Loop - For And Concept Of Loop
----------------------------------------
 Loop For :
for( [1][2][3]){

// Block Of Code

 }
 exp :
 for(i =0 ; i < 10 ; i++){
 console.log(i) // 1 ..... 9   ستظهر النتيجة هكذا
 }

##########################################################

- #049 - Looping On Sequences_2
-------------------------------------
exp : بالمثال يتضح المقال 

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"] ;
let onlyNames = [] ;
for(let i = 0; i < myFriends.length; i++){
if(typeof myFriends[i] === "string"){
onlyNames.push(myFriends[i]) 
}
} // ["Osama", "Ahmed","Sayed", "Ali"] ستكون النتيجة كالتالي سيظهر الكلمات وفقط يعني السترينج

##########################################################

- #050 - Nested Loops And Trainings
--------------------------------------
exp : 

let products = [" eyboard(", "Mouse", "Pen", "Pad", "Monitor"] ;
let colors = ["Red", "Green , "Black"] ;
let models =[2020, 2021] ;
for(let i = 6; i < products- length; i++){
console.log("#".repeat(15) ) ;
console.log(` # ${products[i] } `) ;
console.log("#".repeat(15) ) ;
console.log("Colors: ") ;
for(let j = 0; j < colors,length; j++){
console.log('- ${colors[j] } ') ;
}
for(let k = 0; k < colors,length; k++){
console.log('- ${colors[k] } ') ;
}
} 
///// النتيجة اولية ويمكنك ان تتخيل معي كل المنتجات الاخرى تتكرر هكذا
###############
# Keyboard
###############
Colors:
- Red
- Green
- Black
Models:
- 2020
-2021    ستظهر النتيجة هكذا 

##########################################################
- #051 - Loop Control - Break, Continue, Label
------------------------------------------------
Loop Control
- Break
- Continue
-  Label
exp :
let products =["Keyboard", "Mouse", "Pen , "Pad","Monitor"];
let colors =[ Red", "Green", "Black"] ;
for(let i = 0; i < products.length; i++){
  if(products[i]==="pen"){
   break;   // عندما يصل للكلمة يتوقف
   continue; // عندما يصل للكلمة يتخطاها ويواصل 
  }
console.log (products[i]) ;//ترتيب الكود مهم
}
label: exp

mainloop :for(let i = 0; i < products.length; i++){
           console.log (products[i]) ;
                nestedloop: for(let j = 0; j < colors.length; j++){
                 console.log(colors[j])
                 }
}
###########################################################

- #052 - Loop - For Advanced Example
--------------------------------------
exp: الكتابة المتقدمة 

let products =[ "Keyboard", "Mouse", "Pen", "Pad , "Monitor", "iPhone"] ;
let i = 0;
for(;;){
console.log(products[i]);
 i++
 if(i === products.length)break;
}

############################################################

- #054 - Loop - While
--------------------------------------
exp:
let products = ["Keyboard", Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let index = 0;
while (index < products.length) {
console.log(products[index]);
index += 1;
}

############################################################

- #055 - Loop - Do While
--------------------------------------
let products = ["Keyboard", Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;
do{
console.log(i);// لازم يطبق هذا رغما عن انفه هههههه
i++
}while(false);
console.log(i);

############################################################
*/
