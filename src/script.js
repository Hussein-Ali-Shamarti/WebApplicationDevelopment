
/*our services*/
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

/*our Calendar*/

document.addEventListener("DOMContentLoaded", function () {
  const monthYearTitle = document.getElementById("month-year");
  const prevMonthArrow = document.getElementById("prev-month");
  const nextMonthArrow = document.getElementById("next-month");
  const daysGrid = document.getElementById("days-grid");

  let currentDate = new Date();

  function generateCalendar(date) {
    daysGrid.innerHTML = "";
    // Capitalize the first letter of the month and concatenate the year
    const monthName = date.toLocaleDateString("default", { month: "long" });
    const year = date.toLocaleDateString("default", { year: "numeric" });
    monthYearTitle.textContent =
      monthName.charAt(0).toUpperCase() + monthName.slice(1) + " " + year;

    const firstDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();
    const lastDayOfPreviousMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
    const lastDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    // Adjust for Sunday
    const adjustedFirstDayOfMonth = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;

    // Fill in the days from the previous month
    for (let i = 0; i < adjustedFirstDayOfMonth - 1; i++) {
      daysGrid.innerHTML += `<div class="day inactive">${
        lastDayOfPreviousMonth - adjustedFirstDayOfMonth + i + 2
      }</div>`;
    }

    // Fill in the days of the current month
    for (let i = 1; i <= lastDayOfMonth; i++) {
      // Add a heart only on February 14th
      const isFebruary = date.getMonth() === 1;
      const isFourteenth = i === 14;
      if (isFebruary && isFourteenth) {
        daysGrid.innerHTML += `<div class="day special" id="valentines-day">${i} <span class="heart">&#10084;</span></div>`;
      } else {
        daysGrid.innerHTML += `<div class="day">${i}</div>`;
      }
    }

    // Fill in the days of the next month
    let daysToAddForNextMonth = 7 - (daysGrid.children.length % 7);
    if (daysToAddForNextMonth && daysToAddForNextMonth < 7) {
      for (let i = 1; i <= daysToAddForNextMonth; i++) {
        daysGrid.innerHTML += `<div class="day inactive">${i}</div>`;
      }
    }
  }

  // Event listeners for previous and next arrows
  prevMonthArrow.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
  });

  nextMonthArrow.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
  });

  // Initially generate the calendar
  generateCalendar(currentDate);
});

include();
