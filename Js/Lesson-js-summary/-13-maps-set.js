/*
- #123 - Set Data Types And Methods
---------------------------------------------

  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has


let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);  // الطريقة الاولى set انشاء ال 
// let myUniqueData = new Set(myData); // الطريقة الثانية عن طريق استدعاء المتغير set انشاء ال 
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);   //  methode add عن طريق ال set انشاء ال 

let myUniqueData = new Set(); /// ------
myUniqueData.add(1).add(1).add(1);       ---- >  set  هذه طريقة أخرى لاضافة عنصر ل
myUniqueData.add(2).add(3).add("A"); -----

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`); //true سيعطينا قيمة   set اذا وجده داخل ال  A استخدمناها للبحث عن العنصر  has

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size); //يعني كم عنصر بداخلها set نستخدمها لمعرفة حجم ال size 

console.log(myData[0]);
console.log(myUniqueData[0]); // []  لا يقبل طريقة الدخول بال  set 

// myUniqueData.delete(2);
console.log(myUniqueData.delete(2)); //  set نستخدمها لحذف قيمة ما من  delete 

console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear(); //set نستخدمها لحذف جميع العناصر من 

console.log(myUniqueData);
console.log(myUniqueData.size);


############################################################

- #124 - Set vs WeakSet And Garbage Collector
---------------------------------------------

  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible


// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);

############################################################
- #125 - Map Data Type Vs Object
--------------------------------

  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map


let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  "10": "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

############################################################

- #126 - Map Methods
--------------------------------
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size


let myMap = new Map([
  [10, "Number"],         // set  مثال عن ال 
  ["Name", "String"],
  [false, "Boolean"],
]);

// myMap.set(10, "Number");     // set  مثال عن ال 
// myMap.set("Name", "String");

console.log(myMap);

console.log(myMap.get(10));    
console.log(myMap.get("Name"));        // get  مثال عن ال 
console.log(myMap.get(false));

console.log("####");

console.log(myMap.has("Name"));  //لانها موجودة true  وستكون النتيجة  key Name مثال عن البحث عن ال 

console.log("####");

console.log(myMap.size); // map لمعرفة عدد العناصر الموجودة في ال 

console.log(myMap.delete("Name")); // name لحذف ال

console.log(myMap.size);

myMap.clear(); // لمسح كل ما في الماب

console.log(myMap.size); // ستكون النتيجة 0

############################################################

- #127 - Map Vs WeakMap
--------------------------------

  - Map vs WeakMap   // مقارنة بينهما 
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --


let mapUser = { theName: "Elzero" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);

############################################################

- #128 - Array.from Method
---------------------------

  Array Methods                                   /// سنستخدمها مستقبلا 
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments


console.log(Array.from("Osama"));
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);
console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];

let mySet = new Set(myArray);

console.log(Array.from(mySet));

// console.log([...new Set(myArray)]); // Future

function af() {
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));

############################################################
- #129 - Array.copyWithin Method
---------------------------------

  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End


let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray);

############################################################

- # 130 - Array.some Method
---------------------------------

  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 10;

// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

let check = nums.some(function (e) {
  return e > this;
}, myNumber);

// let check = nums.some((e) => e > 5);

console.log(check);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);
  
############################################################
- # 131 - Array.every Method
---------------------------------

  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --


const locations = {
    20: "Place 1",
    30: "Place 2",
    50: "Place 3",
    40: "Place 4",
  };
  
  let mainLocation = 15;
  
  let locationsArray = Object.keys(locations);
  
  console.log(locationsArray);
  
  let locationArrayNumbers = locationsArray.map((n) => +n);
  
  console.log(locationArrayNumbers);
  
  let check = locationArrayNumbers.every(function (e) {
    return e > this;
  }, mainLocation);
  
  console.log(check);

############################################################
- # 132 - Spread Syntax And Use Cases
--------------------------------------

  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"


// Spread With String => Expand String

console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);

console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });

############################################################

*/
