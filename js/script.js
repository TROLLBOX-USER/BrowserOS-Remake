let using = navigator.appCodeName;
let progressboot = 0;
function alertz() {
  alert("You are using " + using + " as your browser. Welcome to " + using + " OS.");
}

function update() {
  updateBoot();
}

function increase() {
  if (progressboot >= 100) {
    progressboot = 99
    location.replace("login.html")
  }
  progressboot += 1;
}

function updateBoot() {
  document.getElementById('booting').innerHTML = "<h1>" + progressboot + "% booting " + using + " OS...</h1>";
}

setInterval(update, 50)
setInterval(increase, Math.round(Math.random() * 100));
