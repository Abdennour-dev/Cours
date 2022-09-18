// ##############################################################################
console.log("%cActivity 01", "color:red;");

let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += start) {
  if (i == exclude) {
    continue;
  }
  console.log(i);
}
/* Output
10
20
30
50
60
70
80
90
100*/

// ##############################################################################
console.log("%cActivity 02", "color:red;");
let start1 = 10;
let end1 = 0;
let stop = 3;

for (let j = start1; j > end1; j--) {
  if (j < start) {
    console.log("0" + "" + j);
  } else {
    console.log(j);
  }
  if (j == stop) {
    break;
  }
}
/* Output
10
09
08
07
06
05
04
03*/
// ##############################################################################
console.log("%cActivity 03", "color:red;");

let start3 = 1;
let end3 = 6;
let breaker = 2;
for (z = start3; z <= end3; z++) {
  console.log(z);
  for (k = breaker; k <= end3; k += breaker) {
    if (k == end3) {
      break;
    }
    console.log("--" + "" + k);
  }
}
/*Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4 */

// ##############################################################################
console.log("%cActivity 04", "color:red;");

let index = 10;
let jump = 2;
let end4 = 0;

for (r = index; r >= end4; r -= jump) {
  if (r == jump) {
    break;
  }
  console.log(r);
}

/* Output
10;
8;
6;
4;*/

// ##############################################################################
console.log("%cActivity 05", "color:red;");

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let number = +true;
for (w = +false; w < friends.length; w++) {
  if (friends[w][+false] == letter.toUpperCase()) {
    continue;
  }
  console.log(`"${number} => ` + "" + friends[w]);
  number++;
}
/* Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"*/

// ##############################################################################
console.log("%cActivity 06", "color:red;");

let start6 = 0;
let swappedName = "elZerO";
swappedName = swappedName.split("");
for(snn=start6;snn<swappedName.length;snn++){
 if (swappedName[snn]==swappedName[snn].toLowerCase()){
   swappedName[snn]=swappedName[snn].toUpperCase();
 }else{
   swappedName[snn]=swappedName[snn].toLowerCase();
 }
}
console.log(swappedName.join(""));


/* Output

"ELzERo"

*/
// ##############################################################################
console.log("%cActivity 07", "color:red;");

let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for(m =++start7;m< mix.length;m++){
if(typeof mix[m] === "number" ){
  console.log(mix[m])
}
}
/* Output
2
3
4 */
// ##############################################################################
console.log("%cActivity 08", "color:red;");

let friends1 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter = 0;
while(counter<friends1.length){
  if(typeof friends1[counter] == 'string' && friends1[counter][index1].toUpperCase()!='A'){
    console.log(friends1[counter]);
  }
  counter++;
}
/*  Output
"1 => Sayed"
"2 => Mahmoud"*/