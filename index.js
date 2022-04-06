import './style.css';
import { initializeApp } from 'firebase/app';

import {
  login,
  loginEmail,
  loginPassword,
  signup,
  signupEmail,
  signupPassword,
  logout,
  initUI,
  clearLogin,
  clearSignup,
  hideError,
  showError,
  hideForms,
  showForms,
  hideUser,
  showUser
} from './ui';

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCm3Etz1oqSTDfFnwmqxvE5KvEUzL-6G9s',
  authDomain: 'playground-jps.firebaseapp.com',
  projectId: 'playground-jps',
  storageBucket: 'playground-jps.appspot.com',
  messagingSenderId: '854665995034',
  appId: '1:854665995034:web:c63595af8bfed3879502a3',
  measurementId: 'G-91T1K5PN08',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

initUI();

onAuthStateChanged(auth, (user) => {
  if (user) {
    showUser(user);
    hideForms();
  }
  else {
    hideUser();
    showForms();
  }
})

const handleLogin = async (e) => {
  e.preventDefault();
  hideError();

  const email = loginEmail.value;
  const password = loginPassword.value;

  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    console.log('login', credential.user);
    clearLogin();
  } catch (error) {
    showError(error);
  }
};

const handleLogout = async (e) => {
  e.preventDefault();
  hideError();

  try {
    await signOut(auth);        
  } catch (error) {
    showError(error);
  }
}

const handleCreate = async (e) => {
  e.preventDefault();
  hideError();

  const email = signupEmail.value;
  const password = signupPassword.value;

  try {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('signup', credential.user);
    clearSignup();
  } catch (error) {
    showError(error);
  }
}

login.addEventListener('click', handleLogin);
logout.addEventListener('click', handleLogout);
signup.addEventListener('click', handleCreate);