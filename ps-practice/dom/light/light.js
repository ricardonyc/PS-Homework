const btn = document.querySelector(".btn");
const on = document.querySelector(".on");
const off = document.querySelector(".off");
const background = document.querySelector(".background");

function lightSwitch() {
  if(on.classList.contains("hidden")){
      on.classList.remove("hidden")
      off.classList.add("hidden")
      background.style.backgroundColor = 'white'
      btn.innerHTML = 'Turn off'
      btn.classList.remove("dark-btn")
  } else {
      on.classList.add("hidden")
      off.classList.remove("hidden")
      background.style.backgroundColor = 'black'
      btn.innerHTML = 'Turn on'
      btn.classList.add("dark-btn")
  }
}

