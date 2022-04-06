export const login = document.getElementById('login');
export const loginEmail = document.getElementById('loginEmail');
export const loginPassword = document.getElementById('loginPassword');

export const signup = document.getElementById('signup');
export const signupEmail = document.getElementById('signupEmail');
export const signupPassword = document.getElementById('signupPassword');

export const logout = document.getElementById('logout');

const errorSection = document.getElementById('errorSection');
const errorMessage = document.getElementById('errorMessage');

const userSection = document.getElementById('userSection');
const userEmail = document.getElementById('userEmail');
const userUid = document.getElementById('userUid');

const loginSection = document.getElementById('loginSection');
const signupSection = document.getElementById('signupSection');

export function clearLogin() {
  loginEmail.value = '';
  loginPassword.value = '';
}

export function clearSignup() {
  signupEmail.value = '';
  signupPassword.value = '';
}

export function hideError() {
  errorSection.style.display = 'none';
  errorMessage.innerHTML = '';
}

export function showError(error) {
  errorSection.style.display = 'block';
  errorMessage.innerHTML = `Error: ${error.message}`;
  console.error(error);
}

export function hideUser() {
  userSection.style.display = 'none';
  userEmail.innerHTML = '';
  userUid.innerHTML = '';
}

export function showUser(user) {
  userSection.style.display = 'block';
  userEmail.innerHTML = `<strong>email</strong>: ${user.email}`;
  userUid.innerHTML = `<strong>uid</strong>: ${user.uid}`;
}

export function hideForms() {
  loginSection.style.display = 'none';
  signupSection.style.display = 'none';
}

export function showForms() {
  loginSection.style.display = 'block';
  signupSection.style.display = 'block';
}

export function initUI() {
  hideError();
  hideUser();
  hideForms();
}