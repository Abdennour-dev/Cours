// ##############################################################################
console.log("%cActivity 01", "color:red;");

const way1 = document.getElementById("elzero"),
  way2 = document.getElementsByClassName("element")[0],
  way3 = document.getElementsByTagName("div")[0],
  way4 = document.getElementsByName("js")[0],
  way5 = document.querySelector("div"),
  way6 = document.querySelector("[id='elzero']"),
  way7 = document.querySelector(".element"),
  way8 = document.querySelector('[name="js"]'),
  way9 = document.querySelectorAll("div")[0],
  way10 = document.querySelectorAll("#elzero")[0],
  way11 = document.querySelectorAll('[class="element"]')[0],
  way12 = document.querySelectorAll('[name="js"]')[0],
  way13 = document.body.firstElementChild,
  way14 = document.body.childNodes[1],
  way15 = document.body.children[0];

console.log(way10);

// ##############################################################################
console.log("%cActivity 02", "color:red;");

image = document.querySelector("div > img");
for (i = 0; i < 10; i++) {
  image.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  image.setAttribute("alt", "Elzero Logo");
  console.log(image);
}

// ##############################################################################
console.log("%cActivity 03", "color:red;");
