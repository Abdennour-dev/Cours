/*
############################################################

- #079 - Object - Introduction
--------------------------------------
Object
- Intro and What Is Object
- Testing Window object
- Accessing Object
-----------------
exp:

 مثال بسيط يوضح ويشرح لنا كيفية انشاء اوبجيكت

let user = {
// Properties
theName: "Osama ,
theAge: 38,

 // Methods 
sayHello: function(){
return 'Hello';
},
};
console.log(user.theName); // الاستدعاء من الاوبجكت
console.log(user.theAge);
console.log(user.sayHello());

############################################################

- #080 - Dot Notation vs Bracket Notation
--------------------------------------
object
- Dig Deeper
- Dot Notation vs Bracket Notation
- Dynamic Property Name
----------
exp:

let myVar = "country";
let user = {
theName: "Osama",
"country of": "Egypt",
country: "algeria",
};
console.log(user.theName); // osama : Dot Notation
console.log(user.[country of]); // egypt  : Bracket Notation
console.log(user.myVar); // undefine because it is Dynamic Property Name
console.log(user[myVar]); // algeria سيترجم الدايناميك الى المتغير الداخلي ويأخذ النتيجة 

############################################################

- #081 - Nested Object And Advanced Trainings
--------------------------------------
exp : 

let user = {
name: "Osama" ,
age: 38,
skills: ["HTML", "CSS", "JS"],
available: false,
addresses: {
  ksa: "Riyadh" ,
  egypt: {
    one: "Cairo",
    two: "Giza",
  },
},
checkAv: function (){
 if(user.available === true){
   return 'Free for work' ;
 }else{
   return 'Not free';
 }
};

console.log(user.name); // 
console.log(user.age); // 
console.log(user.skills); //  بعض الطرق للتعامل مع المصفوفة
console.log(user.skills[2]); // access to index
console.log(user.skills.join(" - ")); // add - betwin index of array
console.log(user.addresses.ksa); // 
console.log(user.addresses.egypt); // 

brackets notation  يمكننا استعمال طريقة 

console.log(user["addresses"].egypt.one) // يمكن الخلط بين الطريقتين اثناء الاستدعاء
console.log(user["addresses"]["egypt"]["one"]) // يمكن الاستدعاء بهذه الطريقة

############################################################

- #082 - Create Object With New Keyword
--------------------------------------
exp:

let user = new Object({ // هذه طريقة اخرى لانشاء اوبجيكت 
age : 20,
});
console.log(user); // 20 

user.age = 38;
user[ "country" ] = "Egypt";
user.sayHello = function ( ) {
return "Hello";
};
console.log(user);
console.log(user.age); // 38  updat value 
console.log(user.country); // Egypt
console.log(user.sayHello()); Hello

############################################################

- #083 - This Keyword
--------------------------------------
Function this Keyword
- this Introduction
- this Inside Object Method
    When a function is called as a method of an object,
    its this is set to the object the method is called on,
- Global Object
- Test Variables With Window And This
- Global Context
- Function Context
Search
- Strict Mode
------------------
exp : 

console.log (this) ;
console.log (this === window) ;
myvar = 100;
console.log(window.myVar) ;
console.log(this.myvar) ;

function sayHelloQ(){
console.log(this) ;
return this;
}
sayHello();
console.log (sayHello()=== window) ;
document.getElementById("cl") .onclick = function(){
console.log(this) ;
};

let user = {
  age: 38,
  ageInDays: function(){
  return this.age * 365;
  },
};
console.log(user.age);
console.log(user.ageInDays());

############################################################

- #084 - Create Object With Create Method
--------------------------------------
Object
- Create Object With create Method
----------------
exp: 

let user = {
age: 20,
doubleAge: function(){
return this.age * 2;
},
};
console.log (user) ; //object user
console.log (user.age) ; // 20
console.log (user.doubleAge()) ; // 40  object to double the age 20 * 2 = 40

let obj = Object.create ({}) ;
obj.a = 100; // add this on onj 
console.log(obj); // object obj 

let copyObj = Object.create(user); // use the user example to creat new object
copyObj.age = 50;   استخدمنا نفس النموذج مع استبدال قيمة العمر  
console.log(copyObj); // the object user = copyObj 
console.log(copyObj.age); // 50 
console.log(copyObj.doubleAge( ));// 100

############################################################

- #085 - Create Object With Assign Method
--------------------------------------
exp:

let obj1 = {
    prop1: 1,
    meth1: function(){
      return this.propl;
    },
};
let obj2 = {
    prop2: 2,
    meth2: function(){
    return this.prop2;
    },
};
let targetObject = {
prop1: 100,
prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2) j

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, { props: 5, props: 6 });

console.log(newObject);


############################################################

*/