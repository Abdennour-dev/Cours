/*
###############################################
- #102 - What Is BOM-
---------------------
BOM [Browser Object Model]
- Introduction
Window Object Is The Browser Window
Window Contain The Document Object
All Global Variables And Objects And Functions Are Members Of Window Object
Test Document And Console
- What Can We Do With Window Object ?
Open Window
Close Window
Move Window
Resize Window
Print Document
Run Code After Period Of Time Once Or More
Fully Control The URL
Save Data Inside Browser To Use Later
---------------------

exp:
window.console.log("hello");
window.document.title = "hello";

################################################

- #103 - Alert, Confirm, Prompt
----------------------------------

BOM [Browser Object Model]
- alert (Message) => Need No Response Only Ok Available
- confirm(Message) => Need Response And Return A Boolean
- prompt(Message, Default Message) => Collect Data


-1 alert (Message):
exp : 
          alert("Test") ;

-2 confirm(Message)
exp : 
          let confirmMsg = confirm("Are You Sure?") ;
          console.log(confirmMsg) ;
          if(confirmMsg === true){
          console.log("Item Deleted") ;
          }else{
          console.log("Item Not Deleted") ;
          }

-3 prompt(Message, Default Message) : 

exp : 
       let promptMsg = prompt("Good Day To YOU ?","Write Day With 3 Characters") ;
          console.log(promptMsg) ;  

#################################################

- #104 - setTimeout and clearTimeout
--------------------------------------
BOM [Browser Object Model]
- setTimeout (Function, Timeout, Additional Params)
- clearTimeout(Identifier)

-1 setTimeout (Function, Timeout, Additional Params)
------------------------------------------------------
exp :
      setTimeout(function(){
      console.log('Msg');
      },3000); ستظهر الرسالة بعد 3 ثواني 

      setTimeout(sayMsg, 3000);

      function sayMsg(){
      console.log('l am Message') ;
      }

      setTimeout(sayMsg,3000,"abdennour", 27); اضفنا اسم الشخص والسن 

      function sayMsg(user,age){ استدعيناهم هنا 

      console.log(`l am Message for ${user} his age is ${age}`) ;

      }

-2 clearTimeout(Identifier)
-----------------------------
exp :
      let counter = setTimeout(sayMsg, 3000);
            function sayMsg(){
            console.log('l am Message') ; الدالة بعد 3 ثواني تعطينا رسالة  
            }
      let btn = document.querySelector("button");
      btn.onclick = function(){
        clearTimeout(counter) بهذا الكود اوقفنا عمل الدالة الموقوتة 
 }

 #################################################

 - #105 - setInterval and clearInterval
-----------------------------------------
BOM [Browser Object Model]
- setInterval (Function, Millseconds, Additional Params)
- clearInterval(Identifier)

#########################
code html :
<div>5</div>
#########################

-1 setInterval ()
-2 clearInterval()
-----------------------------------------------------------
في هذا المثال تم استخدام الامرين معا
exp:
    let div = document.querySelector("div")

    function countdown() {

    div.innerHTML -= 1;


    if(div.innerHTML === "0"){
      clearInterval(counter); // يوقف الكود عند الوصول الى 0
    }

       }

    let counter = setInterval(countdown, 1000);// كل ثانية يعاد تشغيل الكود
    
####################################################
- #106 - Window Location Object
---------------------------------
BOM [Browser Object Model]
- location Object
- href Get / Set [URL| | Hash | | File| |Mail]
- host
- hash
- protocol
- reload()
- replace ()
- assign()
exp : 

console.log(location) ; get  يعطيك الرابط الذي انت فيه حاليا 

console.log(location.href) ; get href يذهب للرابط الذي وضعته داخل 

      location.href = " https://elzero.org/ "; // تتوجه مباشرة لهذا الرابط set

      location.href = "/#id "; // يقبل حتى الهاشطاج set

console.log(location.host) ; //127.0.0.1:5500  port

console.log(location.hostname) ; //127.0.0.1

console.log(location.protocol) ;// http : يعطيك نوع البروتوكل الذي انت متواجد فيه 

console.log(location.hash) ;// #test يعطيك الهاش الخاص بالرابط اللي انت فيه 

      location.reload() // يقوم بتحديث الصفحة

      location.replace("https://google.fr") //  يقوم بالذهاب للرابط مع حذفه من الهيسطوري

      location.assign("https://facebook.com") // يقوم بالذهاب للرابط مع حفظه في الهيسطوري


#######################################################################
- #107 - Window Open And Close
---------------------------------
BOM [Browser Object Model]
- open{URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt] , History
- close()
- Window Features
width [Num]
height [Num]
left [Num]
top [Num]

Search
- Window.Open Window Features
exp : 

مثال توضيحي ستظهر نافذة تاخذك لموقع جوجل بابعاد محددة وفي مكان محدد بعد ثانيتين
في نافذة اخرى
setTimeout(function(){

window.open("https://google.fr","_blank","width=400,height=400,top=40,left=500")

},2000)

############################################################################

- #108 - Window History Object
-------------------------------------
BOM [ Browser Object Model]
— History API
---Properties
      -length
---Methods
      -back( )
      -forward()
      - go(Delta) => Position In History

Search [For Advanced Knowledge]

pushState( ) + replaceState()

exp:

history.length // يعطيك عدد الصفحات الموجودة في الهيسطوري

history.back()// ترجعك للصفحة الخلفية في الهيسطوري

history.forward()// ترجعك للصفحة الامامية في الهيسطوري

history.go(5)// تاخذك للصفحة الامامية في الهيسطوري رقم 5


############################################################################

- #109 - Scroll, ScrollTo, ScrollBy, Focus, Print, 
-----------------------------------------------------
BOM [Browser Object Model]
- stop()
- print()
- focus()
- scrollTo (x > y|| Options)
- scroll(x, y||Options)
- scrollBy(x, y|| Options)

exp :

let m = window.open("https://google.fr","_blank","width=400,height=400,top=40,left=500")

stop() // لتوقف العميلة

m.close() // للخروج من النافذة

print() // للطبع 

m.focus() // للتركيز على النافذة مباشرة 

window.scrollTo(400,200) // تذهب نحو الاحداثيات وتبق في مكانها دون تزويد

window.scrollTo({
   // نفس الكود بطريقة اخرى
  left : 400,
  top: 200,
  behavior: "smooth"
})

window.scrollBy(500,300)  تذهب للاحداثيات مع امكانية تزويد نفس القيمة كلما اعدنا تنفيذ الكود

############################################################################

- #110 - Scroll To Top Using Y Practice
-----------------------------------------------------
BOM [Browser Object Model]
- Practice => Scroll To Top
- scrollx [Alias => PageXOffset]
- scrollY [Alias => PageYOffset]

exp :
###############
code html & css:
    <style>
      body {
        height: 5000px;
      }
      button {
        background-color: red;
        border: none;
        color: white;
        font-weight: bold;
        padding: 6px;
        border-radius: 4px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
      }
    </style>
 
    <button>Up</button>
    
###############

let btn = document.querySelector("button") ;

window.onscroll = function(){

if(window.scrollY >= 600){

btn.style.display = "block";

} else {
  
btn.style.display = "none";

}

    };

btn.onclick = function(){
  window.scrollTo ({
left: 0,

top: 0,

behavior: "smooth",

})
    };
############################################################################

- #111 - Local Storage
-----------------------------------------------------
BOM [Browser Object Model]
Local Storage
- setltem
- getItem
- removeltem
- clear
- key
Info
- No Expiration Time
- HTTP And HTTPS
- Private Tab

exp:

لدينا قيمتين وهما local storage.setItem في

key and value


//Set
window.localStorage.setItem("color","#fff") // الطريقة 1
window.localStorage.fontWeight = "bold";  // 2
window.localStorage["fontSize"] = "20px"; // 3
--------------------

console.log(window.localStorage); // اظهارها على الكونصول
console.log(typeof window.localStorage); // it 's object

--------------------

//Get
console.log(window.localStorage.getItem("color")) // #fff  نحن الان نستدعي اللون ولا ندخله
console.log(window.localStorage.color) // #fff
console.log(window.localStorage["color"]) // #fff

//Remove one
window.localStorage.removeItem("color") // حذف اللون 

//Remove all
window.localStorage.clear() // حذف الكل 

//key
window.localStorage.key(0) // سيحضر لنا الاندكس 0

// Set color in page
------------------
document.body.style.backgroundColor = window.localStorage.getItem("color"); // وضعنا خلفية للصفحة من اللون الذي ادخلناه في لوكال سطوراج 

############################################################################

- #112 - Local Storage Color Application Practice
-----------------------------------------------------

BOM [Browser Object Model]
Local Storage Color Application Practice

##################
code html & css :
--------------------
  <style>
      body {
        background-color: #eee;
      }
      ul {
        padding: 0;
        margin: 0;
        background-color: #ddd;
        margin: 20px auto;
        padding: 20px;
        width: 400px;
        list-style: none;
        display: flex;
        justify-content: space-between;
      }
      ul li {
        width: 60px;
        height: 60px;
        border: 2px solid transparent;
        opacity: 0.4;
        cursor: pointer;
        transition: 0.3s;
      }
      ul li.active,
      ul li:hover {
        opacity: 1;
      }
      ul li:first-child {
        background-color: red;
      }
      ul li:nth-child(2) {
        background-color: blue;
      }
      ul li:nth-child(3) {
        background-color: green;
      }
      ul li:nth-child(4) {
        background-color: black;
      }
      .experiment {
        background-color: red;
        width: 600px;
        height: 300px;
        margin: 20px auto;
      }
    </style>
    <ul>
      <li class="active" data-color="red"></li>
      <li data-color="blue"></li>
      <li data-color="green"></li>
      <li data-color="black"></li>
    </ul>
    <div class="experiment"></div>

##################

let lis = document.querySelectorAll("ul li") ;
let exp = document.querySelector(".experiment") ;

if(window.localStorage.getItem("color")){ 

// If There Is Color In Local Storage
//[1] Add Color To Div
exp.style.backgroundColor = window.localStorage.getItem("color") ;

//[2] Remove Active Class From All Lis
lis.forEach((li)=>{
li.classList.remove("active");
});
}else{
// If No Color in Local Storage I
console.log("No");
}
lis.forEach((li) => {
li.addEventListener("click",(e) => {

  //Remove Active Class From all Lis
lis.forEach((li) => {
li.classList.remove("active");

});

  // Add Active Class To Current Element
e.currentTarget.classList.add("active") ;

  // Add Current Color To Local Storage
window.localStorage.setItem("color", e.currentTarget.dataset.color);

  //Change Div Background Color
exp.style.backgroundColor = e.currentTarget.dataset.color;

}); 
 }); 

############################################################################

- #113 - Session Storage And Use Cases
-----------------------------------------------------

  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
----------------------
################

############################################################################


-----------------------------------------------------

############################################################################


-----------------------------------------------------

############################################################################


-----------------------------------------------------

############################################################################


-----------------------------------------------------

############################################################################


-----------------------------------------------------

############################################################################
*/