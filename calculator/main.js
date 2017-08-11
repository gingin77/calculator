let number = document.querySelectorAll("number");
let displayed = document.getElementById("calc_display").innerHTML;
let beingCalculated = "";


console.log(displayed);

number.addEventListener('click', enterNumbers, false);

function enterNumbers(){
    number = this.innerHTML;
    displayed += number;
}
















// // References
//
// document.getElementById("myBtn").addEventListener("click", function(){
//     // this.style.backgroundColor = "red";<< change style, if I have time to put a timer on the color change. Make it last for just a second.
//
//
// }false);
// // Useful page on EventListeners - https://www.w3schools.com/Jsref/met_element_addeventlistener.asp
//
