const fname = document.getElementById("f-name")
const lname = document.getElementById("l-name")
const email = document.getElementById("email")
const tel = document.getElementById("tel")
const password = document.getElementById("password")


const handleSubmit = (event) => {
  event.preventDefault()
  fname.value = ""
  lname.value = ""
  email.value = ""
  tel.value = ""
  password.value = ""
}

document.getElementById("form").addEventListener('submit', handleSubmit)