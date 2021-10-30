function validatePassword() {
  let x = document.forms["usrForm"]["Password"].value;
  let y = document.forms["usrForm"]["Password2"].value;
  if (x !== y) {
    alert("Passwords must be the same");
    return false;
  }
  if (x.length < 8) {
    alert("Password must be at least 8 characters");
    return false;
  }
  if (y.length < 8) {
    alert("Re-entered password must be at least 8 characters");
    return false;
  }
}