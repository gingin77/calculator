/*Element for the container that displays numbers*/
  let calc_displayed = document.getElementById("calc_display");
  console.log(calc_displayed);

/*String that is displayed*/
  let displayed = calc_displayed.innerHTML;
  console.log(displayed);

/*Button classes & ids- with EventListeners added*/
  let equals = document.getElementById("equals");
  let clear_button = document.getElementById("clear");

  let simpleKeys = document.getElementsByClassName("easy");
  console.log(simpleKeys);

  equals.addEventListener('click', calculatEvListener);
  // clear_button.addEventListener('click', clearEvListener);

  for (let i=0; i<simpleKeys.length; i++){
      simpleKeys[i].addEventListener('click', simpleKeyEvListener);
    }

/*Operational variables and functions*/
  let keyInput = "";
  let mathString = "";

function simpleKeyEvListener(){
  keyInput = event.target.innerHTML;
  console.log(keyInput);
  displayed = calc_displayed.innerHTML = mathString += keyInput;
  console.log(mathString);
}

function calculatEvListener(){
  if (mathString !== ""){
    eval(mathString)
    
  }
}





/*HARD MODE starts here*/
/*Element for the container that displays numbers*/
//   let calc_displayed = document.getElementById("calc_display");
//   console.log(calc_displayed);
//
// /*String that is displayed*/
//   let displayed = calc_displayed.innerHTML;
//   console.log(displayed);
//
// /*Button classes & ids*/
//   let numberKeys = document.getElementsByClassName("number");
//   console.log(numberKeys);
//   let plusMinusKeys = document.getElementsByClassName("plusMinus");
//   let multiplyDivide = document.getElementsByClassName("multiplyDivideModulo");
//
//   let equals = document.getElementById("equals");
//   let clear_button = document.getElementById("clear");
//
// /*Operational variables and functions*/
//   let beingCalculated = "";
//
//
// for (let i=0; i<numberKeys.length; i++){
//     numberKeys[i].addEventListener('click', numberKeyEvListener);
//   }
//
// for (let i=0; i<plusMinusKeys.length; i++){
//       plusMinusKeys[i].addEventListener('click', plusMinusKeysEvListener);
//     }
//
// for (let i=0; i<multiplyDivide.length; i++){
//       numberKeys[i].addEventListener('click', multiplyDivideEvListener);
//     }



//
// function numberKeyEvListener(){
//     let numberEntry_s = event.target.innerHTML;
//     displayed = calc_displayed.innerHTML += numberEntry_s;
//     console.log(numberEntry_s);
//     // document.getElementById("calc_display").innerHTML="";
//     console.log(displayed);
// }
//
// function plusMinusKeysEvListener(){
//     let pMkey = event.target.innerHTML;
//     displayed = calc_displayed.innerHTML += pMkey;
//     console.log(pMkey);
//     // document.getElementById("calc_display").innerHTML="";
//     console.log(displayed);
// }












// // References
//
// document.getElementById("myBtn").addEventListener("click", function(){
//     // this.style.backgroundColor = "red";<< change style, if I have time to put a timer on the color change. Make it last for just a second.
//
//
// }false);
// // Useful page on EventListeners - https://www.w3schools.com/Jsref/met_element_addeventlistener.asp
//
