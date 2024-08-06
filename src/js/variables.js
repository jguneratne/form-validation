// DOM Elements
export const emailInput = document.querySelector(".email");
export const emailError = document.querySelector(".email-error");
export const countryDropdown = document.querySelector(".country");
export const countryError = document.querySelector(".country-error");
export const zipInput = document.querySelector("#zip-code");
export const zipError = document.querySelector(".zip-error");
export const password = document.querySelector(".password");
export const passwordError = document.querySelector(".pw-error");
export const passwordConfirm = document.querySelector(".password-confirm");
export const passwordConfirmError = document.querySelector(".pw-confirm-error");
export const form = document.querySelector("form");
export const submitError = document.querySelector(".submit-error");

// Country and Zip Constraints taken from the following documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation

export const pwConstraint = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]|[_]\\)).{8,15}$"
); // Trying pattern from following forum: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
