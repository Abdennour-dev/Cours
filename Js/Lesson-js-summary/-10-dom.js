/*
- #086 - What Is DOM And Select Elements
-----------------------------------------
DOM : document object model
****************************************
code html:
 <title>my title</title>
 <body>
 <div id='my-c'>you welcome</div>
 <p>hello my friends</p>
 <p>my class</p>
 <p>my shop</p>
 <span class='myspan'>april month</span>
 <header class="hd"></header>
 <form>
 <input name="addition" value="1"/>
 <input name="addition2" value="2"/>
 </form>
 <form>
 <input name="addition3" value="3"/>
 <input name="addition4" value="4"/>
 </form>
 <a href="#">01</a>
 <a href="#">02</a>
 <a href="#3">03</a>
</body>
******************************************
1-- Find element by id :
     exp : 
       let myId = document.getElementById("my-c");  
       
2-- Find element by tage name :
     exp : 
       let myTg = document.getElementsByTagName("p");

3-- Find element by class :
     exp : 
       let myCls = document.getElementByClassName("myspan");

4-- Find element by css selectors :(internet explorer 8 غير مدعومة في )
     exp : 
       let myQuery = document.querySelector(".hd");       
       let myallQuery = document.querySelectorAll(".hd");       لاستدعاء جميع الوسوم التي تحمل نفس الكلاص
 
5-- title , body , forms , links: 
     exp:
       - document.title //
       - document.body //
       - document.forms[0].addition.value // يمكن ان نعامل ما نستدعيه حتى بطريقة المصفوفات والاندكس
       - document.links[2].href // #3 ستظهر نتيجة الرابط كما هو موضح
##########################################################

- #087 - Get Set Elements Content And Attributes
--------------------------------------------------
****************************************
code html:
<div class="js">javascript <span>div</span></div>
<img src="" alt="" />
<a href="#" class="links">google</a>

******************************************
DOM [Get / Set elements content and attributes]
1-- innerHTML :كاملا  html  اضافة كود 
2-- textContent :اضافة نص 
exp: 
let myElement = document.querySelector(".js");       لاستدعاء جميع الوسوم التي تحمل نفس الكلاص
 
                                                                       سوف نقوم بتغيير محتوى الكلاص الذي استدعيناه   
                                                                      سنغير محتوى
                                                                       html
myElement.innerHTML ="salam alikoum<h1>abdennour</h1> " ;// 
                                                                    سنقوم بتغيير محتوى النص وليس اكواد
                                                                    html
myElement.textContent ="salam alikoum<h1>abdennour</h1> " ;//   

3-- change attributes directly
-images : التعديل على صورة والتعامل معها

document.images[0].src = "myfiles/img/header.png";
document.images[0].alt = "header image";
document.images[0].title = "header image";
document.images[0].id = "header image";

4-- change attributes with methods

   --- getAttribute attribute استدعاء واظهار الموجودة داخل 

   --- setAttribute او التعديل عليه  attribute  اضافة 

   exp:

   let mylinks = document.querySelector(".links");
      console.log(mylinks.getAttribute("class"))
      console.log(mylinks.getAttribute("href")) استدعاء الاتربيوت
      console.log(mylinks.setAttribute("href","https://google.fr"))مع انشاء اتربييوت اضافة رابط الى هذا اتربييوت
      console.log(mylinks.setAttribute("title","hi") // اضفنا اتربيوت وهو عنوان كان غير موجود

      ##########################################################

- #088 - Check Attributes And Examples
----------------------------------------
****************************************
code html:
<div>div</div>
<p class="para" title="paragraph" data-src="testing">paragraph</p>

*****************************************
DOM [Check Attributes]

1-Element.attributes , -Element.hasAttributes :

exp:

console.log(document.getElementsByTagName("p")[0].attributes)// p ستظهر لنا جميع عناصر الاتربييوت الموجودة في عنصر المستدعى 

2-Element.hasAttribute :

exp : 

let myP = document.getElementsByTagName("p")[0];

if(myP.hasAttribute("data-src")){اشترطنا اذا موجود هذا الاتربييوت ولا ولا 

  console.log("FOUND") ستظهر هذه النتيجة اذن هو موجود 

}else{

  console.log("NOT FOUND")

}

-Element.removeAttribute

exp : 

let myP = document.getElementsByTagName("p")[0]

if(myP.hasAttribute("data-src")){اشترطنا اذا موجود هذا الاتربييوت ولا ولا 

removeAttribute(" "); لحذفه 

}else{

  console.log("NOT FOUND");

}

##########################################################

- #089 - Create And Append Elements
-------------------------------------
DOM [Creat Elements]:
 -createElements

 -createComment

 -createTextNode

 -createAttribute

 -appendChild

   نستعمل مثالا عمليا نفهم فيه هذه الاكواد
        قمنا بانشاء هذا الكود باكواد الجافاسكربت

  **************************
<div class="product" data-custom="" data-test="testing"><!--This is div-->Product one</div>

********************************
let myElement = document.createElement("div");

let myAttr = document.createAttribute("data-custom");

let myText = document.createTextNode("Product one");

let myComment = document.createComment("This is div");

myElement.className ="product";

myElement.setAttributeNode(myAttr);

myElement.setAttribute("data-test","testing");

// append comment to element
myElement.appendChild(myComment);

// append text to element
myElement.appendChild(myText);

// append element to body
document.body.appendChild(myElement);

##########################################################

- #090 - Product With Title And Description Practice
-----------------------------------------------------
DOM [Creat Elements]:
 --practice product with headeing and paragraph
  
   مثال آخر جيد 

  let myMainElement = document.createElement("div");
  let myHeading = document.createElement("h2");
  let myParagraph = document.createElement("p");

  let myHeadingText = document.createTextNode("Product Title");
  let myParagraphText = document.createTextNode("Product Description");

  //Add heading text 
  myHeading.appendChild(myHeadingText);

  //Add heading to main element
  myMainElement.appendChild(myHeading);

  //Add paragraph text
  myParagraph.appendChild(myParagraphText);

  //Add paragraph to main element
  myMainElement.appendChild(myParagraphText);

  myMainElement.className = "product";
  
  document.body.appendChild(myMainElement);
  ##########################################################

 - #091 - Deal With Children's
 --------------------------------
******************************
code html :
<div>
hello div
<p> hello p </p>
<span>hello span</span>
<!-- comment -->
hello 
</div>

**********************************
 -children

 -childNodes

 -firstChild

 -lastChild

 -firstElementChild

 -lastElementChild

 سنضع بعض الامثلة عليها مع شرح خفيف

 let myElement = document.querySelector("div")
 console.log(myElement); كاملا div تظهرالوسم 

 console.log(myElement.children);تظهر العناصر التي بداخل الديف

 console.log(myElement.children[0]);يأتي باول عنصر

 console.log(myElement.childNodes);ياتي بكل ما هو بادخل الديف

 console.log(myElement.childNodes[0]);ياتيك باول شيء داخل الديف

 console.log(myElement.firstChild);او طفل كان شيء ام عنصر

 console.log(myElement.lastChild);آخر شيء

 console.log(myElement.firstElementChild);اول عنصر

 console.log(myElement.lastElementChild);آخر عنصر
 
##########################################################

- #092 - DOM Events
DOM [Events]:
-Use events on html 
*********************************

code html
---------
مثال 
<button id="btn" onclick ="consol.log("clicked")">click here</button>

*********************************
-Use events on js 

1-onclick : لعمل حدث بعد الكليك
exp: 
let myBtn = document.getElementById("btn");

 myBtn.onclick = function(){

   console.log("clicked");

 }
2-oncontextmenu : عند الضغط على يمين الفأرة 
3-onmouseenter : عندما تمر الفارة عليه
4-onmouseleave : عند مرور الفارة عليه ثم انسحابها

5-onload
6-onscroll : عند هبوطك في صفحة طويلة يمكنك استخدامها
7-onresize : عندك تغييرك لحجم في الصفحة
 
8-onfocus : عند تركيزك مثلا على انبووت
9-onblur
10-onsubmit  تستعمل في ارسال البيانات 

###############################################
- #093 - Validate Form And Prevent Default
-----------------------------------------
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
-------------------------
exp:

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) { // التاكد ان الحقل غير فارغ
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault(); // منع الحدث من الحصول 
  }
};

document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};

###############################################
- #094 - Event Simulation - Click Focus Blur
-----------------------------------------
  DOM [Events Simulation]
  - click
  - focus
  - blur
----------------
exp:

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  two.focus();
};

one.onblur = function () {
  document.links[0].click();
};

###############################################
- #095 - Class List Object And Methods
-----------------------------------------

  DOM [Class List]
  - classList لاظهار جميع الكلاصات
  --- length لمعرفة عدد الكلاصات
  --- contains للتأكد من وجود الكلاص المراد معرفته
  --- item(index) تضع رقم الاندكس ويعطيك محتوى الاندكس 
  --- add اضافة كلاص 
  --- remove  حذف كلاص
  --- toggle  يضيف ويحذف حسب الحالة 

----------------
exp:

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));

element.onclick = function () {
  element.classList.toggle("show");
};

###############################################
- #096 - CSS Styling And Stylesheets
-----------------------------------------

- DOM [CSS]
- style css لاستعمال خاصية من خواص ال
    - cssText css لكتابة اكثر من كود خاص بال
    - removeProperty(propertyName)[Inline, Stylesheet]
    - setProperty(propertyName, value, priority)
---------------
#####################
code html & css :
------------------
<div class="my-div">hello every one</div>

other file main.css => selector div{ font-size:30px;line-height:1.8;}
#####################
exp:

let element = document.getElementByld("my-div") ;
element.style.color = "red"; //غيرنا اللون الى الاحمر
element.style.fontWeight = "bold"; // غير الخط الى غليض
element.style.cssText = "font-weight: bold; color: green; opacity: 0.9"; // استعملنا خاصية تسمع لنا بكتابة الكود كما اعتدنا
element.style.removeProperty("color") // لحذف خاصية من الخواص
element.style.setProperty("font-size","40px","important") // لاضافة خاصية 

في ملف خارجي نستعمل الطريقة التالية   css للتحكم في خواص ال  
document.styleSheets.[0].rules[0].style.removeProperty("line-height");
document.styleSheets.[0].rules[0].style.setProperty("background-color","red");


###############################################
- #097 - Before, After, Prepend, Append, Remove
-----------------------------------------

  DOM [Deal With Elements]
  - before [Element || String] element وضع عنصر او عبارة قبل ال 
  - after [Element || String]  وضع عنصر او عبارة بعد الالمنت 
  - append [Element || String] وتكون في الاخير elemnet وضع عنصر او عبارة داخل ال 
  - prepend [Element || String] وتكون في الاول  elemnet وضع عنصر او عبارة داخل ال 
  - remove dom تحذف العنصر من شجرة 
---------------
exp:

let element = document.getElementById("my-div");
let createdP = document.createElement("p");

// element.remove();

###############################################
- #098 - DOM Traversing
-----------------------------------------

  DOM [Traversing]
  - nextSibling      السطر الذي بعده يعني اما ان يكون عبارة او طاق او تعليق او عنصر
  - previousSibling      السطر الذي قبله وممكن يكون اي شيء من العناصر التي ذكرناها من قبل 
  - nextElementSibling        element السطر الذي بعده بشرط يكون عنصر اي 
  - previousElementSibling     elemnt   السطر الذي قبله ومشروط يكون 
  - parentElement   تأخذك للعنصر الأب 
------------------
exp:

let span = document.querySelector(".two");

console.log(span.parentElement); // على اساس انه هو الاب  div  سيظهر 

span.onclick = function () {
  span.parentElement.remove(); قمنا في هذا المثال بحذف العنصر الاب 
}

###############################################
- #099 - DOM Cloning
-----------------------------------------

  DOM [Cloning]
  - cloneNode(Deep)
-----------------------

let myP = document.querySelector("p").cloneNode(true);سيقوم بنسخ العنصر بدون محتوى false لو كانت  true قمنا بنسخ العنصر بكل محتواه لان القيمة هي 
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`; المنسوخ p قمنا بالتعديل على الآيدي لل 

myDiv.appendChild(myP);

###############################################
- #100 - AddEventListener
-----------------------------------------

  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
--------------------
exp:

let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
});

###############################################
*/