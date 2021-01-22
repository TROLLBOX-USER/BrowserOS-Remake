let users = {
  currently: [
    {
      namez: "Nam",
      registered: new Date('2021-1-22'),
      password: btoa("coder")
    },
    {
      namez: "Tom",
      registered: new Date('2021-1-22'),
      password: btoa("batch")
    }
  ]
}

function checkRegisteredAndLogined() {
  if (users.currently[0].namez !== "Nam") {
    confirm("You have either hacked into, or borrowed Nam's account. If Nam has logged into this account, Welcome.")
  } 
  if (users.currently[1].namez !== "Tom") {
    confirm("You have either hacked into, or borrowed Tom's account. If Tom has logged into this account, Welcome.")
  }
}

function loginCheck() {
  if (document.getElementById('placeholder').value == users.currently[0].password) {
    confirm("Correct Password")
    location.replace("/gui.html")
  } else {
    confirm("Wrong Password")
  }
  if (document.getElementById('placeholder').value == users.currently[1].password) {
    confirm("Correct Password")
    location.replace("/gui.html")
  } else {
    confirm("Wrong Password")
  }
}

function execute(event) {
  var x = event.charCode || event.keyCode
  if (x === 13) {
    loginCheck()
  }
}

console.log(users.currently[0].password)
console.log(users.currently[1].password)