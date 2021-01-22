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
      password: btoa("roary")
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

function login() {
  if (users.currently[])
}