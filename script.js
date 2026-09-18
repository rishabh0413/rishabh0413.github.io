// Smooth reveal animation on scroll using Intersection Observer
const revealElements = document.querySelectorAll(".reveal");

const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
};

const revealOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

revealElements.forEach((el) => {
  revealOnScroll.observe(el);
});

// Permanent Sticky Navbar (Always visible)
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    // Scroll karne par thoda dark aur shadow aayega
    navbar.style.background = "rgba(10, 25, 47, 0.98)";
    navbar.style.boxShadow = "0 10px 30px -10px rgba(2,12,27,0.8)";
  } else {
    // Page ke ekdum top par normal rahega
    navbar.style.background = "rgba(10, 25, 47, 0.85)";
    navbar.style.boxShadow = "none";
  }
});
