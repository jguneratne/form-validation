// Country and Zip Constraints taken from the following documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
const emailInput = document.querySelector(".email");
const emailError = document.querySelector(".email-error");
const zipInput = document.querySelector("#zip-code");
const zipError = document.querySelector(".zip-error");

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

function zipConstraintFunc() {
  const country = document.getElementById("country").value;

  const zipConstraints = {
    select: [undefined, ""],
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

// Show/Remove Error
function showError(inputError) {
  inputError.style.visibility = "visible";
  inputError.setAttribute("aria-live", "polite");
  inputError.focus();
}

export function removeError(inputError) {
  inputError.textContent = "";
  inputError.style.visibility = "hidden";
  inputError.removeAttribute("aria-live", "polite");
}

// Run on load

document.addEventListener("DOMContentLoaded", () => {
  validateEmailInput();
  checkZip();
});
