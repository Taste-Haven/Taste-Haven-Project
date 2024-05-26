//* Sidebar
// Burger menu
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const sidebar = document.getElementById("sidebar");

  burgerMenu.addEventListener("click", function () {
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-250px"; // or "-100%" for mobile
    } else {
      sidebar.style.left = "0";
    }
  });
});

// Sidebar active state
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item a");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });
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
