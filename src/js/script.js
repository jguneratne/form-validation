import {
  validateEmailInput,
  checkZip,
  checkCountry,
  checkPassword,
  checkPasswordConfirm,
  validateOnSubmit,
} from "./form-validation.js";

// Run on load
document.addEventListener("DOMContentLoaded", () => {
  validateEmailInput();
  checkZip();
  checkCountry();
  checkPassword();
  checkPasswordConfirm();
  validateOnSubmit();
});
