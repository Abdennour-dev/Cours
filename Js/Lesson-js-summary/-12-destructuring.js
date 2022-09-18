/*
- #115 - Destructuring Arrays Part 1
---------------------------------------

  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array


let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = myFriends;   // a = "A " لن تؤثر في النتيجة// e = الاندكس الرابع

console.log(a); //ستحدث عملية تحديث على المتغيرات وسيحضر بيانات المصفوفة 
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFriends[4]);

let [, y, , z] = myFriends; // سيظهر ما استدعي من الانكس فقط 

console.log(y);
console.log(z);


############################################################

- #116 - Destructuring Arrays Part 2
---------------------------------------

  Destructuring
  - Destructuring Array Advanced Examples

let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];


let [, , , [a, , [, b]]] = myFriends; // بهذه الطريقة استطعنا ان نستدعي اندكس موجود في مصفوفة داخل مصفوفة 


console.log(a); // Shady
console.log(b); // Gamal

############################################################

- #117 - Destructuring Arrays Part 3 - Swap Variables
-------------------------------------------------------

  Destructuring
  - Destructuring Array => Swapping Variables

                      انشاء المتغيرين 
let book = "Video";
let video = "Book";
---------------------------------->
// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video ----------> الطريقة القديمة

[book, video] = [video, book]; // الطريقة الحديثة في ابدال مكان القيمتين 

console.log(book); // book
console.log(video); // video

############################################################

- #118 - Destructuring Objects Part 1
---------------------------------------

  Destructuring
  - Destructuring Object


const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};
------------------------------- الطريقة اللي في الاسفل هذه طريقة 1 في استدعاء عنصر من الاوبجكت
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);

const { theName, theAge, theCountry } = user; ///بالطريقة التالية  object  تم استدعاء العناصر من ال 

console.log(theName);
console.log(theAge);
console.log(theCountry);

############################################################

- #119 - Destructuring Objects Part 2
---------------------------------------

  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only


const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};
// الطريقة الاولى 
const {
  theName: n,
  theAge: a,
  theCountry,
  theColor: co = "Red",
  skills: { html: h, css },
} = user;

console.log(n);
console.log(a);
console.log(theCountry);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

// الطريقة الثانية استدعاء اوبجكت بداخل اوبجكت 

const { html: skillOne, css: skillTwo } = user.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);

############################################################

- #120 - Destructuring Function Parameters
---------------------------------------

  Destructuring
  - Destructuring Function Parameters

const user = {                        // object  ال 
    theName: "Osama",
    theAge: 39,
    skills: {
      html: 70,
      css: 80,
    },
  };
  
  showDetails(user);      لاظهار الدالة 
  
  // function showDetails(obj) {   الطريقة الاولى
  //   console.log(`Your Name Is ${obj.theName}`);
  //   console.log(`Your Age Is ${obj.theAge}`);
  //   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
  // }
  
  function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) { الطريقة الثانية 
    console.log(`Your Name Is ${n}`);
    console.log(`Your Age Is ${a}`);
    console.log(`Your CSS Skill Progress Is ${c}`);
  }

############################################################
- #121 - Destructuring Mixed Content
---------------------------------------------

  Destructuring                                             يعتبر هذا تدريب على ما تعلمناه فهنا لدينا جميع انواع البيانات
  - Destructuring Mixed Content

const user = {
    theName: "Osama",
    theAge: 39,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
      egypt: "Cairo",
      ksa: "Riyadh",
    },
  };
  
  const {
    theName: n,
    theAge: a,
    skills: [, , three],
    addresses: { egypt: e },
  } = user;
  
  console.log(`Your Name Is: ${n}`);
  console.log(`Your Age Is: ${a}`);
  console.log(`Your Last Skill Is: ${three}`);
  console.log(`Your Live In: ${e}`);


############################################################

---------------------------------------------

############################################################


*/
