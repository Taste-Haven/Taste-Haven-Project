document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const ratingInput = document.getElementById("rating");

  stars.forEach((star) => {
    star.addEventListener("mouseover", function (e) {
      const value = parseFloat(star.dataset.value);
      highlightStars(value, false);
    });

    star.addEventListener("click", function (e) {
      const value = parseFloat(star.dataset.value);
      ratingInput.value = value;
      highlightStars(value, true);
    });

    star.addEventListener("mousemove", function (e) {
      const rect = star.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const value = parseFloat(star.dataset.value) - 1 + offsetX / rect.width;
      highlightStars(value, false);
    });

    star.addEventListener("mouseleave", function () {
      const value = parseFloat(ratingInput.value);
      highlightStars(value, true);
    });
  });

  function highlightStars(value, isClicked) {
    stars.forEach((star) => {
      const starValue = parseFloat(star.dataset.value);
      if (value >= starValue) {
        star.classList.remove("half");
        star.classList.add("full");
      } else if (value >= starValue - 0.5) {
        star.classList.remove("full");
        star.classList.add("half");
      } else {
        star.classList.remove("full", "half");
      }
      if (isClicked && starValue <= value) {
        star.classList.add("clicked");
      } else if (!isClicked) {
        star.classList.remove("clicked");
      }
    });
  }
});
