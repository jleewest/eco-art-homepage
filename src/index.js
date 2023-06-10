function addNewsletter() {
  let name = prompt("What is your name?");
  if (name !== null) {
    let email = prompt("Welcome, " + name + "! What is your email?");
    if (email !== null) {
      alert("Your request has been approved!");
    } else {
      alert("Sorry, your email was not valid");
    }
    if (newsletterButton.innerHTML === "Subscribe") {
      newsletterButton.innerHTML = "Unsubscribe";
    } else {
      newsletterButton.innerHTML = "Subscribe";
    }
  }
}

let newsletterButton = document.querySelector("#subscribeButton");
newsletterButton.addEventListener("click", addNewsletter);
