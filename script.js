$(document).ready(function () {
  if ($(window).width() < 800) {
    $(".menu-bar").removeClass("fd-none");
    $("nav").addClass("fd-none");
    $(".menu-bar-item").hide();
    $(".menu-bar i").on("click", function () {
      $(".menu-bar-item").show();
      $(".menu-bar-item").css("display", "flex");
    });

    $(".menu-bar-item a").on("click", function () {
      console.log("click");
      $(".menu-bar-item").css("display", "none");
    });
  }
});

let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
