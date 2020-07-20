function validate() {
  firstname = document.getElementById("firstname").value;
  Email = document.getElementById("Email").value;
  PhoneNumber = document.getElementById("PhoneNumber").value;

  if (!firstname) {
    document.getElementById("FnamEerrmsg").style.display = "block";
    document.getElementById("FnamEerrmsg").innerHTML =
      "Please enter first name";
    document.getElementById("FnamEerrmsg").style.color = "red";
  }

  if (!Email) {
    document.getElementById("emailErrmsg").style.display = "block";
    document.getElementById("emailErrmsg").innerHTML = "Please enter Email";
    document.getElementById("emailErrmsg").style.color = "red";
  } else if (!ValidateEmail(Email)) {
    document.getElementById("emailErrmsg").style.display = "block";
    document.getElementById("emailErrmsg").innerHTML =
      "Please enter valid email";
    document.getElementById("emailErrmsg").style.color = "red";
  }

  if (!PhoneNumber) {
    document.getElementById("errPhonnumber").style.display = "block";
    document.getElementById("errPhonnumber").innerHTML =
      "Please enter Phone number";
    document.getElementById("errPhonnumber").style.color = "red";
  }
  if (PhoneNumber.length != 10 || isNaN(PhoneNumber)) {
    document.getElementById("errPhonnumber").style.display = "block";
    document.getElementById("errPhonnumber").innerHTML =
      "Please enter valid  Phone number";
    document.getElementById("errPhonnumber").style.color = "red";
  }

  console.log(typeof PhoneNumber.length);
}

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function hideval(val) {
  document.getElementById(val).style.display = "none";
}
