
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

 /*
 e.currentTarget : نقصد بها المربع الذي سنضغط عليه 
 dataset.color : data-color  html هي التي تأخذ اللون من كود
 */