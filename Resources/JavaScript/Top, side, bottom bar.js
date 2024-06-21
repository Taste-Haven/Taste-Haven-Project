//* Top Bar
// Profile pop up button
document.addEventListener("DOMContentLoaded", (event) => {
  const profileButton = document.getElementById("profileButton");
  const profileMenu = document.getElementById("profileMenu");

  // Hide the profile menu on page load
  profileMenu.classList.add("hidden");

  // Toggle the profile menu when the button is clicked
  profileButton.addEventListener("click", (event) => {
    profileMenu.classList.toggle("hidden");
    event.stopPropagation(); // Prevent the click from propagating to the document
  });

  // Hide the profile menu when clicking outside of it
  document.addEventListener("click", (event) => {
    if (!profileMenu.classList.contains("hidden")) {
      profileMenu.classList.add("hidden");
    }
  });

  // Prevent the menu from hiding when clicking inside of it
  profileMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

//* Sidebar
// Burger menu
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("sidebar-burger-button");
  const sidebar = document.getElementById("sidebar");

  function toggleSidebar() {
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-300px";
      burgerMenu.classList.remove("burger-hidden");
    } else {
      sidebar.style.left = "0";
      burgerMenu.classList.add("burger-hidden");
    }
  }

  burgerMenu.addEventListener("click", toggleSidebar);

  function handleClickOutside(event) {
    if (!sidebar.contains(event.target) && !burgerMenu.contains(event.target)) {
      sidebar.style.left = "-300px";
      burgerMenu.classList.remove("burger-hidden");
    }
  }

  // Add or remove event listeners based on screen width
  function updateEventListeners() {
    if (window.innerWidth < 1700) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
  }

  // Ensure sidebar visibility on resize
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1700) {
      sidebar.style.left = "0";
    } else {
      sidebar.style.left = "-300px";
    }
    updateEventListeners();
  });

  // Initial setup
  if (window.innerWidth >= 1700) {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-300px";
  }
  updateEventListeners();
});

//* Bottom bar
// Bottom bar active state
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".bottom-nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all items
      navItems.forEach((nav) => nav.classList.remove("active"));

      // Add active class to the clicked item
      this.classList.add("active");

      // Optional: Handle page navigation or content update here
      // For example, you might want to load new content based on the clicked nav item
    });
  });
});
