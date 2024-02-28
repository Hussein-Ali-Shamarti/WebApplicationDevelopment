document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");
  const btnPopup = document.querySelector(".btnLogin-popup");

  registerLink.addEventListener("click", function () {
    wrapper.classList.add("active");
  });

  loginLink.addEventListener("click", function () {
    wrapper.classList.remove("active");
  });

  btnPopup.addEventListener("click", function () {
    wrapper.classList.add("active-popup");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var slider = document.querySelector(".services-slider");
  var nextButton = document.querySelector(".next-arrow");
  var prevButton = document.querySelector(".prev-arrow");
  var totalCards = slider.querySelectorAll(".service-card").length;
  var currentIndex = 0;

  function scrollSlider(index) {
    var cardWidth = slider.querySelector(".service-card").clientWidth; // Width of a service card
    var newTransformValue = -(cardWidth * index);
    slider.style.transform = "translateX(" + newTransformValue + "px)";
    
    // Loop back to beginning when reaching the third-to-last service
    if (currentIndex === totalCards - 1) {
      currentIndex = 0;
    } else if (currentIndex === totalCards - 2) {
      currentIndex = 1;
    }
  }

  nextButton.addEventListener("click", function () {
    if (currentIndex < totalCards - 3) {
      currentIndex++;
      scrollSlider(currentIndex);
    } else {
      currentIndex = 0; // Reset currentIndex to 0
      scrollSlider(currentIndex);
    }
  });

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      scrollSlider(currentIndex);
    }
  });
});

