// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Typed.js animation
var typed = new Typed(".typed-text", {
  strings: ["Business Analyst", "Data Enthusiast", "Problem Solver"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// GSAP scroll animations
gsap.registerPlugin(ScrollTrigger);

gsap.from("#projects", {
  scrollTrigger: "#projects",
  y: 100,
  opacity: 0,
  duration: 1
});
