const statusInput = document.querySelector("#status");
const guestsInput = document.querySelector("#guests");
const checkButton = document.querySelector("#checkButton");
const result = document.querySelector("#result");

checkButton.addEventListener("click", function() {
    console.log("Button clicked!");
});

checkButton.addEventListener("click", function() {
    const status = statusInput.value;
    const rawguests = guestsInput.value;
    const guests = Number(rawguests);

    console.log(status);
    console.log(guests);

    if (status === "yes" && guests <= 2) {
    result.textContent = "You can RSVP!";
} else {
    result.textContent = "You cannot RSVP.";
}

if (rawGuests === "" || guests < 0) {
    result.textContent = "Enter a valid guest count.";
}else if (status === "yes" && guests <= 2) {
    result.textContent = "You can RSVP!";
}else if (status === "yes" ) {
    result.textContent = "You may bring up to two guests.";
}else {
    result.textContent = "This event is for students only'";
}
});

