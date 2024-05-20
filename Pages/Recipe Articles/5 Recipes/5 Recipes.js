const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  overlay.classList.toggle("overlay-active");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("nav-active");
  overlay.classList.remove("overlay-active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("nav-active");
    overlay.classList.remove("overlay-active");
  }
});

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
