let form = document.querySelector(".form");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (userEmailExists(email.value)) {
    if (userPassCorrect(email.value, pass.value)) {
      localStorage.setItem("currentUser", email.value);
      location.replace("./shop.html ");
    } else {
      alert("Please enter the correct password!!!");
      form.reset();
    }
  } else {
    alert("Email-id does not exist.\nPlease sign-up with us!!!");
    location.href = "./index.html";
  }
});

// Event listener to automatically hide the taskbar when user clicks the form
form.addEventListener("click", () => {
  if (window.innerWidth < 920 && links.classList.contains("responsive")) {
    links.className = "";
  }
});

// function to check if the entered email exists and is correct
function userEmailExists(email) {
  let tempEmail = JSON.parse(localStorage.getItem("userEmails"));

  if (tempEmail != null) {
    for (let x of tempEmail) {
      console.log(x);
      if (x === email) {
        return true;
      }
    }
  } else {
    return false;
  }
}

// function to check id the eneterd passwrod for the given email is correct
function userPassCorrect(email, password) {
  let tempLogArray = JSON.parse(localStorage.getItem("usersData"));

  for (let i in tempLogArray) {
    if (tempLogArray[i].email === email && tempLogArray[i].pass === password) {
      return true;
    }
  }

  return false;
}
