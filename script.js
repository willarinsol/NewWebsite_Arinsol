const openMenuBtn = document.getElementById("openMenu");
const navMenuBtn = document.getElementById("navMenuBtn");
const homeBtn = document.getElementById("homeBtn");
const closeMenuBtn = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuLinks = document.querySelectorAll(".menu-links a");
const carousels = document.querySelectorAll(".photo-carousel");
const activityTrigger = document.getElementById("activityTrigger");
const activitySubMenu = document.getElementById("activitySubMenu");

function resetAnimations() {
  const animatedElements = document.querySelectorAll(".fade-in-down");
  animatedElements.forEach((el) => {
    el.style.animation = "none";
    el.offsetHeight;
    el.style.animation = null;
  });
}

const toggleMenu = (show) => {
  menuOverlay.classList.toggle("active", show);
  if (!show) activitySubMenu.classList.remove("open");
};

openMenuBtn.addEventListener("click", () => toggleMenu(true));
navMenuBtn.addEventListener("click", () => toggleMenu(true));
closeMenuBtn.addEventListener("click", () => toggleMenu(false));
homeBtn.addEventListener("click", () => {
  toggleMenu(false);
  resetAnimations();
});

// Activity Submenu Toggle
activityTrigger.addEventListener("click", (e) => {
  e.preventDefault();
  activitySubMenu.classList.toggle("open");
});

// Carousel Switching
menuLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const section = link.getAttribute("data-section");
    if (!section) return;

    menuLinks.forEach((l) => l.classList.remove("active-link"));
    carousels.forEach((c) => c.classList.remove("active"));

    link.classList.add("active-link");
    const targetCarousel = document.getElementById(`carousel-${section}`);
    if (targetCarousel) targetCarousel.classList.add("active");
  });
});

document.querySelectorAll(".carousel-track").forEach((track) => {
  track.addEventListener(
    "mouseenter",
    () => (track.style.animationPlayState = "paused"),
  );
  track.addEventListener(
    "mouseleave",
    () => (track.style.animationPlayState = "running"),
  );
});
