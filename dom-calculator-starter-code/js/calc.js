document.addEventListener("DOMContentLoaded", function (){


  //Empty string outputting innerHTML of buttons selected to GUI
  var sumString = "";

  //var buttonNums, globally declared, is an Array as it calls class .buttonNum
  var buttonNums = document.querySelectorAll(".buttonNum");

  //var screenInput, declared globally, sets innnerHTML of id #screen
  var screenInput = document.getElementById("screen");


/*~~~~~~~~~~ User inputs outputted to string and GUI ~~~~~~~~~~~~*/

  //for loop, iterates through buttonNums array and applys event addEventListener, lisetning for "click", to each instantiation
  for (var i = 0; i < buttonNums.length; i++) {
    var number = buttonNums[i]
    number.addEventListener("click", function (event){
      //On event (click) add to subString innerHTML of button clicked
      sumString += this.innerHTML
      //set screenInputs innerHTML to = sumString therfore outputting selected button to GUI
      screenInput.innerHTML = sumString;
      })
    }

    //repeat of above but for operators (+ - / *)
  var operator = document.querySelectorAll(".operator");
  for (var i = 0; i < operator.length; i++) {
      var operatorSelect = operator[i]
      operatorSelect.addEventListener("click", function (event){
        var screenInput = document.getElementById("screen");
        sumString += this.innerHTML
        screenInput.innerHTML = sumString;
      })
    }

/*~~~~~~~~~~ Calculates user input string on event (click)  ~~~~~~~~~~~~*/
  var equality = document.querySelectorAll(".equals")[0] //calling only first instance of array
    equality.addEventListener("click", function (event){
      //eval converts string of user inputs into an expression, calculates it, this is then set to equal result
      var result = eval(sumString)
      //calls subString string containing user inputs
      sumString = "";
      //set screenInputs innerHTML to = result of eval(sumString) therfore outputting result to GUI
      screenInput.innerHTML = result;
      })

    var clear = document.querySelectorAll(".buttonClear")[0]
    clear.addEventListener("click", function (event){
      //Sets screen input to clear
      screenInput.innerHTML = "Clear";
    })
  })
