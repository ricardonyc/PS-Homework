// const btn = document.getElementById("calculate");
// const num = document.getElementById("num").value;
// const area = document.getElementById("area");

function circleArea(r) {
  return 3.14 * r ** 2;
}

function see() {
  const num = document.getElementById("num").value;
  const area = (document.getElementById("area").innerHTML = circleArea(num));
}

// btn.addEventListener("click", () => {
//   area.innerHTML = circleArea(num);
// });
