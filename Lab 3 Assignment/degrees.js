const recommendButton = document.querySelector("#recommendButton");
const tempInput = document.querySelector("#tempInput");
const resultParagraph = document.querySelector("#result");

// Listen for when the user clicks the recommendation button
recommendButton.addEventListener("click", function() {
    const rawValue = tempInput.value.trim();

    // Check if the input is blank or non-numeric
    if (rawValue === "" || isNaN(rawValue)) {
        resultParagraph.textContent = "Error: Please enter a valid numeric temperature.";
        return;
    }
  
    const temp = Number(rawValue);


    if (temp < 50) {
        resultParagraph.textContent = "Recommendation: Coat or heavy jacket.";
    } else if (temp >= 50 && temp <= 69) {
        resultParagraph.textContent = "Recommendation: Light jacket or sweater.";
    } else if (temp >= 70 && temp <= 84) {
        resultParagraph.textContent = "Recommendation: T-shirt or light clothing.";
    } else {
        resultParagraph.textContent = "Recommendation: Lightweight clothing and a reminder to stay hydrated!";
    }

    console.log(resultParagraph.textContent);
});