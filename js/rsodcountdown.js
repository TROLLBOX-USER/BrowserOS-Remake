let countdown = 5
setInterval(() => {
  document.getElementById("reboot").innerHTML = "BrowserOS will reboot in " + countdown + " seconds"
  if (countdown == 1) {
   location.replace("login.html")
  }
}, 50)

setInterval(() => {
  countdown -= 1
}, 1000)
