/*
##########################################################

- #040 - Array Big Introduction  تعريف جيد عن المصفوفة
------------------------------------
1- creat arrays 2 methods  new Array() + []:

exp : 

const cars = ["Saab", "Volvo", "BMW"];
const cars = new Array("Saab", "Volvo", "BMW");

2-access arrays elements :
exp : 

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars[2])//BMW     ستظهر هذه النتيجة لاننا استدعينا الاندكس رقم 2 
console.log(cars[2][1])//M    استدعينا اندكس 2 والحرف الثاني الموجود في الاندكس 1 

3-nested arrays :
exp:
const cars = ["Saab", "Volvo", "BMW" , ["renault","toyota"]];
console.log(cars[3][1])//toyota     استدعينا الاندكس 3 ومنه الاندكس 1 لتظهر النتيجة طويوطا 

4-change arrays elements :
exp:
var cars = ["Saab", "Volvo", "BMW" , ["renault","toyota"]];
cars[1] = "Audi";
console.log(cars)//"Saab", "Audi", "BMW" , ["renault","toyota"]

5-check for array array.isarray() :
exp: 
var cars = ["Saab", "Volvo", "BMW" , ["renault","toyota"]];
console.log(Array.isArray(cars))//true
##########################################################

- #041 - Using Length With Array التعامل مع طول المصفوفة
----------------------------------
-length : exp : 

let my_freind = ["a","b","c","d"] ;

console.log(my_freind.length)// 4

console.log(my_freind.length - 2)// ["a","b"] استخدام خاصية معرفة طول المصفوفة لاظهار عدد معين من المصفوفات 
##########################################################

- #042 - Add And Remove From Array حذف واضافة البيانات الى المصفوفة
------------------------------------
-Arrays Methods [adding and removing]

1- unshift ("","") : اضافة عبارة الى البداية

exp: 
let arry = ["abdennour","anes","islem","soundous"]
 arry.unshift("chahra","mohammed","djamel","walid","maroua","amira","fatima","asma","nadjiba","amina")
console.log(arry)//  ستضاف المصفوفة الجديدة الى المصفوفة الاولى من الجهة الامامية

2- push("","") :اضافة عبارة للاخير

3- shift() : حذف اول عبارة من المصفوفة

4- pop() : حذف آخر عبارة من المصفوفة 

##########################################################

- #043 - Searching Array
--------------------------
-Arrays Methods [Searching] البحث عن البيانات 


1-indexOf(من إلى ,العبارة التي تبحث عنها)
exp :
let listNames = ["walid","abdennour","fatima","nadjiba","walid"];
console.log(listNames.indexOf("walid"))// 1   1 نستخدمها للبحث من اليسار لليمين سيقول لنا ان كلمة وليد تقع في الاندكس رقم  


2-lastIndexOf(search element , from index )
exp :
console.log(listNames.lastIndexOf("walid"))//3 هذه تبحث من اليمين لليسار


3-includes(valueToFind , fromIndex)[ES7]
exp :
console.log(listNames.includes("bouchra"))// false بحثنا عن اسم بشرى فالمصفوفة فلم يجدها فظهرت رسالة خطأ 
##########################################################

- #044 - Sorting Arrays
--------------------------
-Array methods [Sort] ترتيب البيانات 

1-sort(Function )
exp: let list = ["fatima", 9 , "nadjiba",5 , 8 ,"maroua", 4 ,"walid","abdennour"] ;
console.log(list.sort())// سيقوم بترتيب االمصفوفة ابجديا

2-reverse()
exp:
console.log(list.reverse())// سيقوم بعكس الاماكن في المصفوفة ما كان في اليمين يصبح في اليسار والعكس بالعكس


##########################################################

- #045 - Slicing Array 
-----------------------
-Array methods [Slicing] التقطيع في المصفوفات


1-slice( البداية start , end not including end لا يدخل آخر عنصر )

exp: let myl=["abdennour","younes","anes","islem","soundous"]
console.log(myl.slice())// سياخذا كامل المصفوفة ويظهرها
console.log(myl.slice(2))//["anes","islem","soundous"]   سيظهر هذه النتيجة بدأ من الاندكس  2 
  تقوم بانشاء مصفوفة جديدة اي انها لا تؤثر على المصفوفة الأم slice() ملاحظة 


2-splice("ما هي العناصر التي تود ان تضيفها","عدد العناصر التي تود ان تحذفها","رقم الاندكس الذي تود ان تعدل عليه")

exp : 
console.log(myl.splice(0,2,"amin","fateh"))//["amin","fateh","anes","islem","soundous"]
##########################################################

- #046 - Joining Arrays 
-------------------------
-Array methods [Joining] الجمع في المصفوفات

1-concat(array , array) => return a new array

exp: 
let a =[1 , 2, 3 ,4] , b=["volvo","toyota"] , c =["abdennour","walid"];
let ELL = a.concat(b,c,"nadjiba",["fatima","maroua"]);
consloe.log(ELL)// سيقوم بجمع جميع المصفوفات في مصفوفة واحدة

2-join(separator تضع هنا اي رمز تود ان تفصل به ) نستعملها لجمع او اصاق جميع البيانات ببعضها في المصفوفة
exp: 
consloe.log(ELL.join( " " ))//   ويضع فراغا بين كل عنصر موجود في المصفوفة ولك الحرية بأي شيء تود ان تفصل  string  سيحول كل المصفوفة الى 

*/
