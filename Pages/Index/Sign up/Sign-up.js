const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm["email"].value;
  const password = signupForm["password"].value;

  if (email === "") {
    alert("Please enter your email.");
    return;
  }

  if (password === "") {
    alert("Please enter your password.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be 6 characters or more.");
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up successfully
      console.log("User signed up successfully:", userCredential.user);
      // You can redirect the user to another page or perform other actions here
    })
    .catch((error) => {
      // Handle errors
      console.error("Error signing up:", error);
      alert("Error signing up. Please try again.");
    });
});
