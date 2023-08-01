$(document).ready(function () {
  /**scroll reveal */
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });
  ScrollReveal().reveal(".home-content, .about-me, h2", { origin: "top" });
  ScrollReveal().reveal(
    ".img-group, .skill-cart, .project-cart, .st-content img, .footer-link, .footer-content ul",
    {
      origin: "bottom",
    }
  );
  ScrollReveal().reveal(".home-content h1, .profile-img, .footer-content h3", {
    origin: "left",
  });
  ScrollReveal().reveal(".home-content p, .about-me p, .footer-content h4", {
    origin: "right",
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

  if ($(window).width() < 800) {
    $(".menu-bar").removeClass("fd-none");
    $("nav").addClass("fd-none");
    $(".menu-bar-item").hide();
    $(".menu-bar i").on("click", function () {
      $(".menu-bar-item").show();
      $(".menu-bar-item").css("display", "flex");
    });

    $(".menu-bar-item a").on("click", function () {
      $(".menu-bar-item").css("display", "none");
    });
  }
});
