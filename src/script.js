// Country and Zip Constraints taken from the following documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
const emailInput = document.querySelector(".email");
const emailError = document.querySelector(".email-error");
const countryError = document.querySelector(".country-error");
const zipInput = document.querySelector("#zip-code");
const zipError = document.querySelector(".zip-error");
const password = document.querySelector(".password");
const passwordError = document.querySelector(".pw-error");
const passwordConfirm = document.querySelector(".password-confirm");

// Email Check
function emailErrorFunc() {
  emailInput.setAttribute("required", "true");
  if (emailInput.validity.valueMissing) {
    showError(emailError);
    emailError.textContent = "Please follow format: your-email@email.com.";
  } else if (emailInput.validity.typeMismatch) {
    showError(emailError);
    emailError.textContent = "Please follow format: your-email@email.com.";
  } else if (emailInput.validity.tooShort) {
    showError(emailError);
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  } else {
    removeError(emailError);
  }
}

function validateEmailInput() {
  emailInput.addEventListener("blur", () => {
    emailErrorFunc();
  });
}

// Zip Code Check

function zipConstraintFunc() {
  const country = document.getElementById("country").value;

  const zipConstraints = {
    select: ["/^w+$/", "You must select a country to add a zip code."],
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  const constraint = new RegExp(zipConstraints[country][0], "");
  console.log(constraint);

  if (constraint.test(zipInput.value)) {
    // The ZIP follows the constraint, we use the ConstraintAPI to tell it
    removeError(zipError);
  } else if (constraint.test(zipInput.value) === "/^w+$/") {
    console.log(constraint.test(zipInput.value));
    showError(zipError);
    zipError.textContent = zipConstraints[country][0];
    showError(countryError);
    countryError.textContent = "Select a country.";
  } else {
    // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
    // give a message about the format required for this country
    zipError.textContent = zipConstraints[country][1];
    showError(zipError);
  }
}

function checkZip() {
  zipInput.addEventListener("blur", () => {
    zipConstraintFunc();
  });
}

// Enter Password

function validatePassword() {
  const pwConstraint = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]|[_]\\)).{8,15}$"
  ); // Trying pattern from following forum: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

  if (pwConstraint.test(password.value)) {
    removeError(passwordError);
  } else {
    showError(passwordError);
  }
}

function checkPassword() {
  password.addEventListener("blur", (e) => {
    validatePassword();
  });
}

// Confirm Password

// // function confirmPassword() {}

// Show/Remove Error
function showError(inputError) {
  inputError.classList.add("invalid");
  inputError.setAttribute("aria-live", "polite");
  inputError.focus();
}

export function removeError(inputError) {
  inputError.classList.add("valid");
  inputError.textContent = "Valid Field";
  inputError.removeAttribute("aria-live", "polite");
}

// Run on load

document.addEventListener("DOMContentLoaded", () => {
  validateEmailInput();
  checkZip();
  checkPassword();
});
