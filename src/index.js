function addNewsletter() {
  let name = prompt("What is your name?");
  if (name !== null) {
    let email = prompt("Welcome, " + name + "! What is your email?");
    if (email !== null) {
      alert("Your request has been approved!");
      newsletterButton.innerHTML = "Unsubscribe";
    } else {
      alert("Sorry, your email was not valid");
    }
  }
}

let newsletterButton = document.querySelector("button");
newsletterButton.addEventListener("click", addNewsletter);
