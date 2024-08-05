import {
  validateEmailInput,
  checkZip,
  checkPassword,
} from "./form-validation.js";

// Run on load
document.addEventListener("DOMContentLoaded", () => {
  validateEmailInput();
  checkZip();
  checkPassword();
});
