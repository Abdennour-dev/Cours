console.log("%cActivity 01", "color:red;");

// Add Variables Here
let numberOne = 10;
let numberTwo = 20;
// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`); /*
  Template Literals Way
  20
  10
*/

// ##############################################################################
console.log("%cActivity 02", "color:red;");

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// ##############################################################################

console.log("%cActivity 03", "color:red;");

console.log(`\`I'm In
\\\\
Love \\\\ \"\"\" \'\'\'
\+\+ With \+\+
\\\"\"\"\\\"\"\"
\"\"JavaScript\"\"\``);

// ##############################################################################

console.log("%cActivity 04", "color:red;");

let a = 21;
let b = 20;
console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_

// ################################### video 17 ###########################################

console.log("%cActivity video 17", "color:red;");
/*
===========================================
== Variables And Concatenation Challenge ==
===========================================

[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat
 */

let vrTitle = "Elzero",
  vrDesctiption = "Elzero Web School",
  vrDate = "25/10",
  vrContain = `<div>
  <h1>${vrTitle}</h1>
  <p>${vrDesctiption}</p>
  <span>${vrDate}</span>
  </div>`;
  document.write(vrContain.repeat(4))
  console.log("the result is on page")
