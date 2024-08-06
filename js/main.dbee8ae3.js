/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/form-validation.js":
/*!***********************************!*\
  !*** ./src/js/form-validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkCountry: () => (/* binding */ checkCountry),
/* harmony export */   checkPassword: () => (/* binding */ checkPassword),
/* harmony export */   checkPasswordConfirm: () => (/* binding */ checkPasswordConfirm),
/* harmony export */   checkZip: () => (/* binding */ checkZip),
/* harmony export */   removeError: () => (/* binding */ removeError),
/* harmony export */   validateEmailInput: () => (/* binding */ validateEmailInput),
/* harmony export */   validateOnSubmit: () => (/* binding */ validateOnSubmit)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/js/variables.js");


// Email Check
function emailErrorFunc() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.emailInput.setAttribute("required", "true");
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.emailInput.validity.valueMissing) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.emailError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent = "Please follow format: your-email@email.com.";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.emailInput.validity.typeMismatch) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.emailError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent = "Please follow format: your-email@email.com.";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.emailInput.validity.tooShort) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.emailError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  } else {
    removeError(_variables__WEBPACK_IMPORTED_MODULE_0__.emailError);
  }
}

function validateEmailInput() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.emailInput.addEventListener("blur", () => {
    emailErrorFunc();
  });
}

// Zip Code Check

function zipConstraintFunc() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.zipInput.setAttribute("required", "true");

  // Country and Zip Constraints taken from the following documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
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

  if (constraint.test(_variables__WEBPACK_IMPORTED_MODULE_0__.zipInput.value)) {
    // The ZIP follows the constraint, we use the ConstraintAPI to tell it
    removeError(_variables__WEBPACK_IMPORTED_MODULE_0__.zipError);
  } else if (constraint.test(_variables__WEBPACK_IMPORTED_MODULE_0__.zipInput.value) === "/^w+$/") {
    // If the country isn't selected
    console.log(constraint.test(_variables__WEBPACK_IMPORTED_MODULE_0__.zipInput.value));
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.zipError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.zipError.textContent = zipConstraints[country][0];
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.countryError);
  } else {
    // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
    // give a message about the format required for this country
    _variables__WEBPACK_IMPORTED_MODULE_0__.zipError.textContent = zipConstraints[country][1];
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.zipError);
  }
}

function checkZip() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.zipInput.addEventListener("blur", () => {
    zipConstraintFunc();
    zipConstraintFunc;
  });
}

// Country Check
function validateCountry() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.countryDropdown.setAttribute("required", "true");

  if (_variables__WEBPACK_IMPORTED_MODULE_0__.countryDropdown.value === "select") {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.countryError);
  } else {
    removeError(_variables__WEBPACK_IMPORTED_MODULE_0__.countryError);
  }
}

function checkCountry() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.countryDropdown.addEventListener("blur", () => {
    validateCountry();
  });
}

// Enter Password

function validatePassword() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.password.setAttribute("required", "true");

  if (_variables__WEBPACK_IMPORTED_MODULE_0__.pwConstraint.test(_variables__WEBPACK_IMPORTED_MODULE_0__.password.value)) {
    removeError(_variables__WEBPACK_IMPORTED_MODULE_0__.passwordError);
  } else {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.passwordError);
  }
}

function checkPassword() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.password.addEventListener("blur", () => {
    validatePassword();
  });
}

// Confirm Password

function confirmPassword() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirm.setAttribute("required", "true");

  if (
    _variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirm.value === "" ||
    _variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirm.value === null ||
    _variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirm.value === undefined
  ) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirmError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirmError.textContent = "Password fields must not be blank.";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirm.value !== _variables__WEBPACK_IMPORTED_MODULE_0__.password.value) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirmError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirmError.textContent = "Password fields do not match.";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirm.value === _variables__WEBPACK_IMPORTED_MODULE_0__.password.value) {
    removeError(_variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirmError);
  }
}

function checkPasswordConfirm() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirm.addEventListener("blur", () => {
    confirmPassword();
  });
}

// Submit Validation

function validateOnSubmit() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailErrorFunc();
    zipConstraintFunc();
    validateCountry();
    validatePassword();
    confirmPassword();
    if (
      !_variables__WEBPACK_IMPORTED_MODULE_0__.emailInput.validity.valid ||
      !_variables__WEBPACK_IMPORTED_MODULE_0__.zipInput.validity.valid ||
      !_variables__WEBPACK_IMPORTED_MODULE_0__.password.validity.valid ||
      !_variables__WEBPACK_IMPORTED_MODULE_0__.passwordConfirm.validity.valid
    ) {
      showError(_variables__WEBPACK_IMPORTED_MODULE_0__.submitError);
      _variables__WEBPACK_IMPORTED_MODULE_0__.submitError.textContent = "Please review all fields before submission";
    } else {
      removeError(_variables__WEBPACK_IMPORTED_MODULE_0__.submitError);
      _variables__WEBPACK_IMPORTED_MODULE_0__.submitError.textContent = "High Five! You entered all fields correctly.";
    }
  });
}

// Show/Remove Error
function showError(inputError) {
  inputError.classList.add("invalid");
  inputError.setAttribute("aria-live", "polite");
  inputError.focus();
}

function removeError(inputError) {
  inputError.classList.add("valid");
  inputError.textContent = "Valid Field";
  inputError.removeAttribute("aria-live", "polite");
}


/***/ }),

/***/ "./src/js/variables.js":
/*!*****************************!*\
  !*** ./src/js/variables.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countryDropdown: () => (/* binding */ countryDropdown),
/* harmony export */   countryError: () => (/* binding */ countryError),
/* harmony export */   emailError: () => (/* binding */ emailError),
/* harmony export */   emailInput: () => (/* binding */ emailInput),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   password: () => (/* binding */ password),
/* harmony export */   passwordConfirm: () => (/* binding */ passwordConfirm),
/* harmony export */   passwordConfirmError: () => (/* binding */ passwordConfirmError),
/* harmony export */   passwordError: () => (/* binding */ passwordError),
/* harmony export */   pwConstraint: () => (/* binding */ pwConstraint),
/* harmony export */   submitError: () => (/* binding */ submitError),
/* harmony export */   zipError: () => (/* binding */ zipError),
/* harmony export */   zipInput: () => (/* binding */ zipInput)
/* harmony export */ });
// DOM Elements
const emailInput = document.querySelector(".email");
const emailError = document.querySelector(".email-error");
const countryDropdown = document.querySelector(".country");
const countryError = document.querySelector(".country-error");
const zipInput = document.querySelector("#zip-code");
const zipError = document.querySelector(".zip-error");
const password = document.querySelector(".password");
const passwordError = document.querySelector(".pw-error");
const passwordConfirm = document.querySelector(".password-confirm");
const passwordConfirmError = document.querySelector(".pw-confirm-error");
const form = document.querySelector("form");
const submitError = document.querySelector(".submit-error");

// Country and Zip Constraints taken from the following documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation

const pwConstraint = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]|[_]\\)).{8,15}$"
); // Trying pattern from following forum: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_validation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-validation.js */ "./src/js/form-validation.js");


// Run on load
document.addEventListener("DOMContentLoaded", () => {
  (0,_form_validation_js__WEBPACK_IMPORTED_MODULE_0__.validateEmailInput)();
  (0,_form_validation_js__WEBPACK_IMPORTED_MODULE_0__.checkZip)();
  (0,_form_validation_js__WEBPACK_IMPORTED_MODULE_0__.checkCountry)();
  (0,_form_validation_js__WEBPACK_IMPORTED_MODULE_0__.checkPassword)();
  (0,_form_validation_js__WEBPACK_IMPORTED_MODULE_0__.checkPasswordConfirm)();
  (0,_form_validation_js__WEBPACK_IMPORTED_MODULE_0__.validateOnSubmit)();
});

/******/ })()
;
//# sourceMappingURL=main.dbee8ae3.js.map