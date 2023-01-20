// *********************************************************************
//  Date: 18/01/2023                                                   //
//  Description:                                                       //
//     1. Create a Background Generator                                //
//     2. Generate a Random Background                                 //
//  Author: Sidi M. Aourid                                             //
// *********************************************************************

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let css = document.querySelector("h3");
let body = document.getElementById("gradient");
const button = document.querySelector(".Mybutton");

const characters = "0123456789abcdef";

//Call the setGradient to initialize body color from initial values in html
setGradient();

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener("click", (e) => {
  e.preventDefault();
  generateRandomColors();
});

function generateRandomColors() {
  let random1 = "#";
  let random2 = "#";
  for (let i = 0; i < 6; i++) {
    random1 += characters[Math.floor(Math.random() * 16)];
    random2 += characters[Math.floor(Math.random() * 16)];
  }
  color1.value = random1;
  color2.value = random2;
  setGradient();
  console.log("Hello: ", random1, random2);
}
