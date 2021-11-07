  function appendNumber(numberButton){
    if(numberButton.textContent ==='.') 
      if(output.textContent.indexOf('.')>-1) return;
      output.textContent += numberButton.textContent;
  }
  function chooseOperation(operationButton){
    if(output.textContent.length ===0 && operationButton.textContent === '-') return appendNumber(operationButton);
    if(output.textContent.length === 1 && output.textContent === '.') return;
    if(output.textContent.length >0 && output.textContent !== '-'){
       if(firstNumber && output.textContent.length >=1) calculation();
       firstNumber = parseFloat(output.textContent);
       previous.textContent = `${output.textContent}${operationButton.textContent.toLowerCase()}`;
    }
    operation = operationButton.textContent;
    output.textContent ='';
  }
  function clearField(clearButton){
    if(clearButton.textContent === "AC" || output.textContent == 'Infinity'){
      output.textContent = '';
      previous.textContent = '';
      firstNumber = undefined;
    }
    else output.textContent = output.textContent.slice(0,-1);
  }
  function calculation(){
    if(!operation) return;
      secondNumber = parseFloat(output.textContent);
      if(!output.textContent.length >0 || !firstNumber) return;
      if(output.textContent.length < 2 && output.textContent === '.') return;
        switch(operation){
          case '+':
           output.textContent = firstNumber + secondNumber;
          break;
          case '-':
            output.textContent = firstNumber - secondNumber;
            break;
          case 'X':
            output.textContent = firstNumber * secondNumber;
            break;
          case '÷':
            output.textContent = firstNumber / secondNumber;
            break;
          case '%':
            output.textContent = firstNumber % secondNumber;
            break;
        }
      operation = undefined;
      firstNumber = undefined;
      secondNumber = undefined;
      previous.textContent ='';
   }

   const output = document.querySelector('#output');
   const previous = document.querySelector('#previous');
   let operation,firstNumber,secondNumber;
   
document.querySelectorAll('[data-number]').forEach(number=> number.addEventListener('click',appendNumber.bind(this,number)));
document.querySelectorAll('[data-operation-type]').forEach(operation => operation.addEventListener('click',chooseOperation.bind(this,operation)));
document.querySelector('[data-equals]').addEventListener('click',calculation);
document.querySelectorAll('[data-clear]').forEach(clearButton=> clearButton.addEventListener('click',clearField.bind(this,clearButton)));