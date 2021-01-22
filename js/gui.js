let users = {
  currently: [
    {
      namez: "Nam",
      description: "Tom's best friend =)",
      registered: new Date('2021-1-22'),
      password: btoa("coder")
    },
    {
      namez: "Tom",
      description: "He likes roary the racing car",
      registered: new Date('2021-1-22'),
      password: btoa("batch")
    },
    {
      namez: "Copy",
      description: "He likes sex only",
      registered: new Date('2021-1-22'),
      password: btoa("sex")
    },
    {
      namez: "Eae",
      description: "He likes emojis",
      registered: new Date('2021-1-22'),
      password: btoa("memes")
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
    location.replace("gui.html")
  } else if (document.getElementById('placeholder').value == users.currently[1].password) {
    confirm("Correct Password")
    location.replace("gui.html")
  } else if (document.getElementById('placeholder').value == users.currently[2].password) {
    confirm("Correct Password")
    location.replace("gui.html")
  } else if (document.getElementById('placeholder').value == users.currently[3].password) {
    confirm("Correct Password")
    location.replace("gui.html")
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

// console.log(users.currently[0].password)
// console.log(users.currently[1].password)
// console.log(users.currently[2].password)
// console.log(users.currently[3].password)
