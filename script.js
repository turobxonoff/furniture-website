let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar-nav');

menu.onclick = () => {
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    navbar.classList.remove('active')
}

// Darkmode
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("darkmode").addEventListener("click", () => {
    document.body.classList.toggle("active");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  if (localStorage.getItem("theme" === "dark")) {
    document.body.classList.add("dark");
  }
});

// Scroll Reveal
const sr = ScrollReveal( {
    origin: 'top',
    distance: '40px',
    duration: 1000,
    reset: true
});
sr.reveal('.home-text, .about-text, .box, .brands, .news-box, .btn, .footer-box', {interval:200});