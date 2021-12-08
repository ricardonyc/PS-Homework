function circleArea(r) {
  return 3.1415 * r ** 2;
}

function calculate() {
  const num = document.getElementById("num").value;
  const area = (document.getElementById("area").innerHTML = circleArea(num));
}
