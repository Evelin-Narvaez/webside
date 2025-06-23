document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelector(".bars");
  const navBar = document.querySelector(".nav-bar");

  if (bars && navBar) {
    bars.addEventListener("click", function () {
      navBar.classList.toggle("active");
    });
  }
});
