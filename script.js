const tracks = document.querySelectorAll(".carousel-track");
const openMenuBtn = document.getElementById("openMenu");
const closeMenuBtn = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

// Carousel Hover Logic
tracks.forEach((track) => {
  track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });
  track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
});

// Menu Toggle Logic
openMenuBtn.addEventListener("click", () => {
  menuOverlay.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  menuOverlay.classList.remove("active");
});

// Close menu if clicking outside the links
menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.classList.remove("active");
  }
});
