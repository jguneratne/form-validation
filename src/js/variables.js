// DOM Elements
export const emailInput = document.querySelector(".email");
export const emailError = document.querySelector(".email-error");
export const countryError = document.querySelector(".country-error");
export const zipInput = document.querySelector("#zip-code");
export const zipError = document.querySelector(".zip-error");
export const password = document.querySelector(".password");
export const passwordError = document.querySelector(".pw-error");
export const passwordConfirm = document.querySelector(".password-confirm");

// Country and Zip Constraints taken from the following documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation

export let country = {
  countryValue: document.getElementById("country").value,

  get countrySelection() {
    return this.countryValue;
  },

  set countrySelection(newCountryValue) {
    this.countryValue = newCountryValue;
  },
};

export const zipConstraints = {
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

export const constraint = new RegExp(
  zipConstraints[country.countryValue][0],
  ""
);

export const pwConstraint = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]|[_]\\)).{8,15}$"
); // Trying pattern from following forum: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
