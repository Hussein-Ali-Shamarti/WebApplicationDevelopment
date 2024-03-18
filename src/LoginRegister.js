/*Login/register*/
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");
  const btnPopup = document.querySelector(".btnLogin-popup");

  // Toggle between registration and login views within the popup
  registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
  });

  loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });

  // Toggle the visibility of the popup
  btnPopup.addEventListener("click", () => {
    wrapper.classList.toggle("active-popup"); // Corrected to toggle for showing/hiding
  });
});
