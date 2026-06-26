const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const age = document.getElementById("age");
const workshop = document.getElementById("workshop");
const terms = document.getElementById("terms");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (fullName.value.trim() === "") {
        message.textContent = "Full name is required.";
        return;
    }

    if (!email.value.includes("@")) {
        message.textContent = "Email is invalid.";
        return;
    }

    if (Number(age.value) <= 0) {
        message.textContent = "Age is not valid.";
        return;
    }

    if (Number(age.value) < 18) {
        message.textContent = "Age must be at least 18.";
        return;
    }

    if (workshop.value === "") {
        message.textContent = "Please select a workshop.";
        return;
    }

    if (!terms.checked) {
        message.textContent = "You must accept the terms.";
        return;
    }

    message.textContent =
        fullName.value + " has been signed up for the workshop.";
});