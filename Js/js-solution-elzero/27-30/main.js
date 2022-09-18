// ##############################################################################
console.log("%cActivity 01", "color:red;");

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log((`${userName}`[0]).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log((userName.split("",1).toString()).toLowerCase()); // e
console.log((userName.substr(0,1).toLowerCase()).repeat(3)); // eee

// ##############################################################################
console.log("%cActivity 02", "color:red;");

let word = "Elzero";

let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ,0)); // True
console.log(word.startsWith((letterE.toUpperCase()),0)); // True
console.log(word.endsWith((letterO.toLowerCase()))); // True

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

// ############################# video 30 ################################

console.log("%cActivity video 30", "color:red;");
let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase()+""+a.slice(3,6)); // Zero

// 8 H
console.log((a.substr(-4,1).toUpperCase()).repeat(8)); // HHHHHHHH

// Return Array
console.log((a.slice(0,6)).split()); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a}`.substr(0,6) ,`${a}`.substr(-6,6)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.slice(0,1).toLowerCase()+""+(a.substr(1,a.length)).toUpperCase()); // eLZERO WEB SCHOOl