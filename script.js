function validatePassword() {
  let x = document.forms["usrForm"]["Password"].value;
  let y = document.forms["usrForm"]["Password2"].value;
  if (x !== y) {
    alert("Passwords must be the same");
    return false;
  }
}