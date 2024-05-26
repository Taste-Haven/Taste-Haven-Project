//* ------------- Dark mode -----------------------------------------------------------------
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
}

// Check if dark mode preference is stored in localStorage
const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
  document.body.classList.add("dark-mode");
}

// Event listener for dark mode toggle
const darkModeToggle = document.querySelector("#Dark-mode-toggle");
darkModeToggle.addEventListener("click", toggleDarkMode);
