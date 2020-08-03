let userInput = document.querySelector('.user-input');
let userEmail = document.querySelector('.user-email');
let userPassword = document.querySelector('.user-password');
let userConfirm = document.querySelector('.user-confirm');
const usernameError = document.querySelector('.username-error');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const matchError = document.querySelector('.match-error');

document.querySelector('.submit-btn').addEventListener('click', () => {
  validateUsername();
  validateEmail();
  validatePassword();
  checkPassword();
})

function validateUsername() {
  let input = userInput.value;
  if(input.length < 3) {
    validateError(userInput);
    usernameError.classList.remove('d-none');
  } else {
    validateSuccess(userInput);
    usernameError.classList.add('d-none');
  }
}

function validateEmail() {
  let input = userEmail.value;
  const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regResponse = reg.test(input);
  if(regResponse) {
    validateSuccess(userEmail);
    emailError.classList.add('d-none');
  } else {
    validateError(userEmail);
    emailError.classList.remove('d-none');
  }
}

function validatePassword() {
  let input = userPassword.value;
  if(input.length < 6) {
    validateError(userPassword);
    passwordError.classList.remove('d-none');
  } else {
    validateSuccess(userPassword);
    passwordError.classList.add('d-none');
  }
}

function checkPassword() {
  let input = userPassword.value;
  let output = userConfirm.value;
  if(input === output) {
    validateSuccess(userConfirm);
    matchError.classList.add('d-none');
  } else {
    validateError(userConfirm);
    matchError.classList.remove('d-none');
  }
}

function validateError(input) {
  if(input.classList.contains('border-green-500')) {
    input.classList.remove('border-green-500');
    input.classList.add('border-red-500');
  } else {
    input.classList.add('border-red-500');
  }
}

function validateSuccess(input) {
  if(input.classList.contains('border-red-500')) {
    input.classList.remove('border-red-500');
    input.classList.add('border-green-500');
  } else {
    input.classList.add('border-green-500');
  }
}