// ##############################################################################
console.log("%cActivity 01", "color:red;");

function sayHello(theName, theGender) {
  if (theGender == "Male") {
    console.log(`Hello mr ${theName}`);
  } else if (theGender == "Female") {
    console.log(`Hello miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// ##############################################################################
console.log("%cActivity 02", "color:red;");
function calculate(firstNum, secondNum, operation) {
  if (secondNum == undefined) {
    console.log("Second Number Not Found");
  } else {
    switch (operation) {
      case "add":
        console.log(firstNum + secondNum);
        break;
      case "subtract":
        console.log(firstNum - secondNum);
        break;
      case "multiply":
        console.log(firstNum * secondNum);
        break;
      default:
        console.log(firstNum + secondNum);
    }
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

function ageInTime(theAge) {
  // Your Code Here
}

// ##############################################################################
console.log("%cActivity 03", "color:red;");
function ageInTime(theAge) {
  if ((theAge <= 10) | (theAge >= 110)) {
    console.log(`${theAge} Age Out Of Range `);
  } else {
    console.log(`years example => ${theAge}`);
    console.log(`months example => ${theAge * 12}`);
    console.log(`days example => ${theAge * 365}`);
    console.log(`hours example => ${theAge * 365 * 24}`);
    console.log(`minuts example => ${theAge * 365 * 24 * 60}`);
    console.log(`seconds example => ${theAge * 365 * 24 * 3600}`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(27); // Months Example => 456 Months

// ##############################################################################
console.log("%cActivity 04", "color:red;");

function checkStatus(a, b, c) {
  let arr = [a, b, c];
  let nm, ag, jb;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      ag = arr[i];
    } else if (typeof arr[i] == "boolean") {
      jb = arr[i];
    } else {
      nm = arr[i];
    }
  }
  if(jb == true){
    jb ="Available";
  }else {
    jb ="Not Available";
  }
  console.log(`"Hello ${nm}, Your Age Is ${ag}, You Are ${jb} For Hire"`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ##############################################################################
console.log("%cActivity 05", "color:red;");

function createSelectBox(startYear, endYear) {
let sel =document.createElement("select"); // <select></select>
document.body.appendChild(sel)
for(k = startYear ; k <= endYear ; k ++){
let o = document.createElement("option")//<option></option>
o.setAttribute("value",k)//<option value="k"></option>
let v = document.createTextNode(k)
o.appendChild(v)
sel.appendChild(o)
}

}
createSelectBox(2000, 2021);

// ##############################################################################
console.log("%cActivity 06", "color:red;");

function multiply(...arr){
  let x = 1;
  for(i=0;i<arr.length;i++){
    if(typeof arr[i] === 'number'){
      arr[i] = Math.trunc(arr[i]);
      x*=arr[i];
    }
  }
  console.log(x);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000