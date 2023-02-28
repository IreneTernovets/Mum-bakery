let hamburger = document.getElementById("hamburger");
let navigList = document.getElementById("nav-list");

function toggleButton() {
  navigList.classList.toggle("show");
}

hamburger.addEventListener("click", toggleButton);
