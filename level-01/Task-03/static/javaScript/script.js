// ----------------------------------------  Clear Display  ----------------------------------------

function clearDisplay () {
  let nullDisplay = '';
  document.querySelector('#display').value = nullDisplay;
}

// ----------------------------------------  For Type Button and Show typing Display  ----------------------------------------

function sendValue(value) {
    let disValue = document.getElementById('display')
    if(disValue.value.length <= 12){
        document.getElementById('display').value += value;
    }
}

// ----------------------------------------  Delete single value  ----------------------------------------

function backspace() {
  let displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}

// ----------------------------------------  Calculate the Result  ----------------------------------------

function calculate() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }

}