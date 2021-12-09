const sol = document.getElementById("solution");

function add() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  sol.innerHTML = num1 + num2;
}

function subtract() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  sol.innerHTML = num1 - num2;
}

function multiply() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  sol.innerHTML = num1 * num2;
}

function divide() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  sol.innerHTML = num1 / num2;
}



