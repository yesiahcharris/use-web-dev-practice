const form = document.querySelector("#interestForm");
const username = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const interest = document.querySelector("#interest");
const result = document.querySelector("#result");

form.addEventListener("submit", function(event) {
event.preventDefault();
console.log("Form Submitted!");

const usernameInput = username.value;
const email = emailInput.value;
const interestInput = interest.value;

console.log(usernameInput);
console.log(email);
console.log(interestInput);

  if (usernameInput === "" || email === "" || interestInput === "") {
    result.textContent = "Please complete all fields.";
  } else {
    result.textContent = "Thank you for your interest";
  }

  if (username === "") {
    result.textContent = "Please enter your name.";
  } else if (emailInput === "") {
    result.textContentContent = "Please enter your email";
  
} else if (interest === "") {
     result.textContent = "Please choose an interest";
  
 } else if (interest === "volunteer") {
   result.textContent = "Explore our volunteering";
 
} else if (interest === "events") {
   result.textContent = "Check out our upcoming events";
 
} else {
    result.textContent = "Be a great mentor!"
  }


});