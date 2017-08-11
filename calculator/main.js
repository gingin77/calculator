/*Element for the container that displays numbers*/
  let calc_displayed = document.getElementById("calc_display");
  console.log(calc_displayed);

  let clearArray = [];

/*String that is displayed*/
  let displayed = calc_displayed.innerHTML;
  console.log(displayed);

/*Button classes & ids- with EventListeners added*/
  let equals = document.getElementById("equals");
  let clear_button = document.getElementById("clear");

  let simpleKeys = document.getElementsByClassName("easy");
  console.log(simpleKeys);

  equals.addEventListener('click', calculatEvListener);
  clear_button.addEventListener('click', clearEvListener);

  for (let i=0; i<simpleKeys.length; i++){
      simpleKeys[i].addEventListener('click', simpleKeyEvListener);
    }

/*Operational variables and functions*/
  let keyInput = "";
  let mathString = "";

function simpleKeyEvListener(){
  keyInput = event.target.innerHTML;
  console.log(keyInput);
  mathString = displayed = calc_displayed.innerHTML += keyInput;
  console.log(mathString);
}

function calculatEvListener(){
  if (mathString !== ""){
    calc_displayed.innerHTML = eval(mathString)
  } else {
    calc_displayed.innerHTML = "nothing to calculate";
  }
}

function clearEvListener(){
  clearArray.push(event.target.innerHTML);
  console.log(clearArray);

  if(mathString !== "" && (clearArray.length == 1)){
    calc_displayed.classList.add( 'display_text' );
    calc_displayed.innerHTML = "You just erased my memory."

      setTimeout (function(){
          mathString = displayed = calc_displayed.innerHTML = "";
          calc_displayed.classList.remove( 'display_text' );
          clearArray.length = 0;
          console.log("This is the clearArray after a full mathString and one click",  (clearArray));
          console.log(mathString);
      }, 2000);
  }if (mathString === "" && (clearArray.length == 1)){
      calc_displayed.classList.add( 'display_dim');

    setTimeout (function(){

        mathString = displayed = calc_displayed.innerHTML = "";
        console.log("The display should have flashed dim");
        calc_displayed.classList.remove( 'display_dim');
    }, 2000);

  }else if (mathString === "" && (clearArray.length >= 2)){
    setTimeout (function(){
        calc_displayed.classList.add( 'display_dim', 'display_text' );
        mathString = displayed = calc_displayed.innerHTML = "What do you want to calculate?";
        calc_displayed.classList.remove( 'display_dim', 'display_text' );
    }, 2000);
    }
    console.log(clearArray);
  }










  // if(mathString === "" && (clearArray.length >= 2)){
  //   calc_displayed.classList.add( 'display_dim' );
  //
  //   setTimeout (function(){
  //     if (clearArray.length >= 2){
  //
  //       displayed = calc_displayed.innerHTML = "What do you want to calculate?";
  //       calc_displayed.classList.remove( 'display_dim' );
  //       clearArray.length = 0;
  //     }
  //   }, 500);
  // }







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



//
// function clearEvListener(){
//   clearArray.push(event.target);
//   calc_displayed.classList.add( 'display_clear' );
//
//   if (mathString !== ""){
//     calc_displayed.innerHTML = "When you hit the C button, you erase my memory. If you want to store your calculations, use the CE button."
//   } else {
//     calc_displayed.innerHTML = "You just erased my memory. If you want to store your calculations, use the CE button.";
//   }
//     setTimeout (function(){
//       if (clearArray.length >= 1){
//         mathString = displayed = calc_displayed.innerHTML = "";
//         calc_displayed.classList.remove( 'display_clear' );
//       }
//     }, 2000);
// }
//
//









// // References
//
// document.getElementById("myBtn").addEventListener("click", function(){
//     // this.style.backgroundColor = "red";<< change style, if I have time to put a timer on the color change. Make it last for just a second.
//
//
// }false);
// // Useful page on EventListeners - https://www.w3schools.com/Jsref/met_element_addeventlistener.asp
//
