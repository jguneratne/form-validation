import {
  validateEmailInput,
  checkZip,
  checkPassword,
  checkPasswordConfirm,
  validateOnSubmit,
} from "./form-validation.js";

// Run on load
document.addEventListener("DOMContentLoaded", () => {
  validateEmailInput();
  checkZip();
  checkPassword();
  checkPasswordConfirm();
  validateOnSubmit();
});
