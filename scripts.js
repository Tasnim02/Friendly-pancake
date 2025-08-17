// Typing animation using Typed.js
var typed = new Typed(".typed-text", {
  strings: ["Business Analyst", "Data Enthusiast", "Problem Solver"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Scroll animation using GSAP
gsap.from("#projects", {
  scrollTrigger: "#projects",
  y: 100,
  opacity: 0,
  duration: 1
});

