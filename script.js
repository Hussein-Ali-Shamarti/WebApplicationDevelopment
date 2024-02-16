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
