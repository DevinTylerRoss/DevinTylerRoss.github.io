const screen = document.getElementById('total');
const numbers = document.getElementById('numbers');
const clear = document.getElementById('clear');
const operators = document.getElementById('operators');
const equals = document.getElementById('equals');
let answer;
let numberOne;
let numberTwo;
let ourOperator = "";

numbers.addEventListener('click', (e) => {
  var clickedItem = e.target.textContent; 
 
   screen.textContent += clickedItem;
  
    
    });

clear.addEventListener('click', (e) => {
    screen.textContent = "0";
 
});


operators.addEventListener('click', (e) => {
  var clickedItem = e.target.textContent; 
   numberOne = screen.textContent;
  screen.textContent = "";
  ourOperator = e.target.textContent;
    
    });

equals.addEventListener('click', (e) =>{
  numberTwo = screen.textContent;
 
  if(ourOperator === "+"){
    
  
 answer = (parseFloat(numberOne) + parseFloat(numberTwo));
  
  } else if (ourOperator === "-"){
    answer = (parseFloat(numberOne) - parseFloat(numberTwo));
  } else if (ourOperator === "/"){
    answer = (parseFloat(numberOne) / parseFloat(numberTwo));
  } else if (ourOperator === "*"){
    answer = (parseFloat(numberOne) * parseFloat(numberTwo));
  }
  screen.textContent = answer;
});


