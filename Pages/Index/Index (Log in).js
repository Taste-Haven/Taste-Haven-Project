import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  const email = emailInput.value;
  const password = passwordInput.value;

  // Clear previous error messages
  emailError.textContent = "";
  passwordError.textContent = "";

  // Email validation
  if (!email) {
    emailError.textContent = "Please enter your email";
    return;
  } else if (!isValidEmail(email)) {
    emailError.textContent = "Please enter a valid email address";
    return;
  }

  // Password validation
  if (!password) {
    passwordError.textContent = "Please enter your password";
    return;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be 6 characters or more";
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    // Sign in with email and password
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("Signed in as:", user.email);
        // Redirect to dashboard or desired page
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        // Handle sign-in errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign-in error:", errorMessage);
        alert(errorMessage); // Show error message to the user
      });
  });

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
