function pytha(num1, num2) {
  return Math.sqrt(num1 ** 2 + num2 ** 2);
}

function calculate() {
  const side1 = document.getElementById("num1").value;
  const side2 = document.getElementById("num2").value;
  const area = document.getElementById("area").innerHTML = pytha(side1, side2);
}




