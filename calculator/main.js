/*Element for the container that displays numbers*/
  let calc_displayed = document.getElementById("calc_display");
  console.log(calc_displayed);/*returns: <button class="rectangle" id="calc_display">-</button> */

/*Button classes & ids- with EventListeners added*/
  let equals = document.getElementById("equals");
  let clear_button = document.getElementById("clear");
  let clear_store = document.getElementById("clear_and_store");
  let sign_toggle = document.getElementById("plusMinus_toggle");
  let memory_key = document.getElementById("memory");
  let sqrt_key = document.getElementById("sqrt");
  let decimal_key = document.getElementById("decimal");

  let simpleKeys = document.getElementsByClassName("easy");
  let multiplyKey = document.getElementById( "multiply" );
  // console.log(simpleKeys); /*returns an HTML Collection*/

  equals.addEventListener('click', calculateEvListener);
  clear_button.addEventListener('click', clearEvListener);
  // clear_store.addEventListener('click', clearStoreEvListener);
  memory_key.addEventListener('click', memEvListener);
  // sqrt_key.addEventListener('click', sqRtEvListener);
  // sign_toggle.addEventListener('click', signTogEvListener);
  // decimal_key.addEventListener('click', decEvListener);

  for (let i=0; i<simpleKeys.length; i++){
      simpleKeys[i].addEventListener('click', simpleKeyEvListener);
    }
    multiplyKey.addEventListener('click', simpleKeyEvListener);


/*Operational variables and functions*/
  let keyInput = "";
  let mathString = "";
  let clearArray = [];
  let equalsArray = [];
  let storedMemoryArray = [];// <used to store mathString values
  let memoryKeyArray = []; //< used to keep track of how many times the mem key is pressed
  let opRestrictor1 = []; //< use to control 1st position; Allow to accumulate until C or = is pressed
  let opRestrictorStr = [];//< use to control subsequent positions; Str is for string; recycle at .length = 2
  // let previous = opRestrictor1.length-1;
  // let twoPrevious = opRestrictor1.length-2;



function simpleKeyEvListener(){
  let eventTargetClasses=event.target.classList;
  // console.log((typeof eventTargetClasses), (eventTargetClasses),(eventTargetClasses[1]));// << this line was used to figure out how to obtain the operator and numeric class names.

  opRestrictor1.push(eventTargetClasses[1]);
  console.log((opRestrictor1), (opRestrictor1.length));
  opRestrictorStr.push(eventTargetClasses[1]);
  console.log("This is the opRestrictorStr", (opRestrictorStr));

// Set up a conditional statement to block an operator being in the first string position
  if (opRestrictor1[0] === "number"){  //this block takes the value associated with a key and gives it to the mathString and the display
          keyInput = event.target.innerHTML;
          if (keyInput === "x"){
                keyInput = "*" ;
              }//this if statement is needed because I want letter x on the key, but need * in the string
          console.log("Here is the keyInput: " + keyInput);
          mathString = calc_displayed.innerHTML += keyInput;
          console.log("Here is the mathString: " + mathString);
  }else if (opRestrictor1[0] === "operator")   {
        calc_displayed.classList.add( 'display_text' );
        calc_displayed.innerHTML = "please press a number";

            setTimeout (function(){
              calc_displayed.classList.remove( 'display_text' );
              mathString.length = 0;
              calc_displayed.innerHTML = "";
              opRestrictor1.shift();
              opRestrictorStr.shift();
              console.log("The opRestrictor arrays were just shifted")
          }, 1000)
  } // Set up a conditional statement that blocks more than one adjacent operator
  if (opRestrictorStr.length > 1) {
        if ((opRestrictorStr[0] === "operator") && (opRestrictorStr[1] === "operator")) {
          keyInput = "";
          console.log("the double operator restriction was triggered")
          calc_displayed.classList.add( 'display_text', 'display_dim' );
          calc_displayed.innerHTML = "please press a number";

              setTimeout (function(){
                calc_displayed.classList.remove( 'display_text', 'display_dim' );
                calc_displayed.innerHTML = mathString.slice(0,-1);
                console.log("This is the mathString after the slice: " + (mathString));
                // opRestrictorStr.shift();
                console.log("The opRestrictorStr array was just shifted")
              }, 1000)
        }
    opRestrictorStr.shift();
  }
}


function calculateEvListener(){
  console.log(opRestrictor1);
  let previous = opRestrictor1[opRestrictor1.length-1];
  let twoPrevious = opRestrictor1[opRestrictor1.length-2];
  console.log(mathString);
  console.log(previous);
  console.log(twoPrevious);
  if ((previous === "operator")&&(twoPrevious === "operator")){
      mathString = mathString.slice(0,-2)
      console.log("After the splice, mathString is: "+ mathString);
  }
  equalsArray.push(event.target.innerHTML);
  if (mathString !== ""){
    calc_displayed.innerHTML = eval(mathString)

  } else {
    calc_displayed.classList.add( 'display_text' );
    calc_displayed.innerHTML = "nothing to calculate";

          setTimeout (function(){
          calc_displayed.classList.remove( 'display_text' );
          equalsArray.length = 0;
          opRestrictor1.shift();
          opRestrictorStr.shift();
        }, 500)
  }
  if ((mathString === "") && (equalsArray.length >= 1)){
    calc_displayed.classList.add( 'display_text' );
    calc_displayed.innerHTML = "nothing to calculate";
        setTimeout (function(){
        calc_displayed.classList.remove( 'display_text' );
        equalsArray.length = 0;
        calc_displayed.innerHTML = 0;
      }, 500)
  }
}

function clearEvListener(){
  clearArray.push(event.target.innerHTML);
  console.log(clearArray);

  if(mathString !== "" && (clearArray.length >= 1)){
    calc_displayed.classList.add( 'display_text' );
    calc_displayed.innerHTML = "You just erased my memory"
    opRestrictor1 = [];
    opRestrictorStr = [];
    mathString = "";

      setTimeout (function(){
          calc_displayed.innerHTML = "";
          calc_displayed.classList.remove( 'display_text' );
          clearArray.length = 0;
          console.log("This is the clearArray after a full mathString and one click",  (clearArray));
          console.log(mathString);
      }, 750);

  }if (mathString === "" && (clearArray.length == 1)){
      calc_displayed.classList.add( 'display_dim');

    setTimeout (function(){
        mathString = calc_displayed.innerHTML = "";
        console.log("The display should have flashed dim");
        calc_displayed.classList.remove( 'display_dim');
    }, 500);

  }else if (mathString === "" && (clearArray.length >= 2)){
    calc_displayed.classList.add( 'display_dim', 'display_text' );
    mathString = calc_displayed.innerHTML = "Use me to calculate!";

    setTimeout (function(){
        console.log(calc_displayed);
        calc_displayed.classList.remove( 'display_dim', 'display_text' );
        mathString = calc_displayed.innerHTML = "",
        clearArray.length = 0;
    }, 1500);
    }
    console.log(clearArray);
  }

function memEvListener(){
  let memoryEvent=event.target.id;
  memoryKeyArray.push(memoryEvent);
  console.log((typeof memoryEvent), (memoryEvent));

  if (memoryKeyArray.length === 1){
    console.log("the memory button was hit");
    calc_displayed.classList.add( 'display_text', 'display_dim' );
    calc_displayed.innerHTML = "MEMORY: Your string is being stored";

          setTimeout (function(){
          calc_displayed.innerHTML = "Hit the MEM key again to see your stored strings";
          console.log("Hit the MEM key again to see your stored strings");
        }, 1200)

        setTimeout (function(){
          calc_displayed.classList.remove( 'display_text', 'display_dim' );
          calc_displayed.innerHTML = "";
          console.log("screen should now be clear");
        }, 3000)
  }

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



// Code that was used for troubleshooting to figure out how to limit the operator sequence:
// if(eventTargetClass.contains("operator")) {
//   console.log = "The classList contains 'operator' ";
// } else {
//    console.log = "The classList does not contain 'operator'";
// } this seems to never get read..... not 100% sure why. Perhaps because I need to be targetting an actual element, not an event.target...

// keyInput = event.target.innerHTML;
// operatorControllerArray.push(event.target);
// operatorControllerArrayClass.push(event.target.className);/*if I say, .class, the return says undefined. Check property list. Use .className instead.*/
// operatorControllerArrayClassList.push(event.target.classList);
//
// console.log("This is the first array");
// console.log(operatorControllerArray);
// console.log("This is the 2nd array with .className");
// console.log(operatorControllerArrayClass);
// console.log("This is the 3rd array with .classList");
// console.log(operatorControllerArrayClassList);/* returns: [DOMTokenList(4)] */
// console.log(typeof operatorControllerArrayClassList);
// console.log(operatorControllerArrayClassList[0]); /* returns: (4) ["easy", "operator", "square", "multiplyDivideModulo", value: "easy operator square multiplyDivideModulo"] */
// // console.log(operatorControllerArrayClassList[0].(0));
// console.log(typeof operatorControllerArrayClassList[0]); /* returns: object */
//
// // my variable for the element classList is operatorControllerArrayClassList
// let arrayContains = operatorControllerArrayClassList.contains("operator");
//       if(arrayContains) {
//       console.log = "The classList contains 'operator' ";
//     } else {
//        console.log = "The classList does not contain 'operator'";
//     }
//
//
//
//
// console.log("The opRestrictorStr was greater than 1 in length");
//
// if (opRestrictorStr[0] === "operator") /*&& (opRestrictorStr[1] === opRestrictorStr[0]))*/ {
//   console.log("index 0 says 'operator'")
// }
// if (opRestrictorStr[0] === "number") /*&& (opRestrictorStr[1] === opRestrictorStr[0]))*/ {
//   console.log("index 0 says 'number'")
// }
// if (opRestrictorStr[1] === "operator") /*&& (opRestrictorStr[1] === opRestrictorStr[0]))*/ {
//   console.log("index 1 says'operator'")
// }
// if (opRestrictorStr[1] === "number") /*&& (opRestrictorStr[1] === opRestrictorStr[0]))*/ {
//   console.log("index 1 says'operator'")
// }


// }else &&
//     ((opRestrictorStr[0] === "operator") && (opRestrictorStr[1] !== "operator"))  ||
//     ((opRestrictorStr[1] === "operator") && (opRestrictorStr[0] !== "operator") )
//
// {
//           keyInput = event.target.innerHTML;
//           if (keyInput === "x"){
//             keyInput = "*" ;
//           }
//           console.log("Here is the keyInput: " + keyInput);
//           // mathString = displayed = calc_displayed.innerHTML += keyInput;
//           console.log("Here is the mathString after a second key was added: " + mathString);
