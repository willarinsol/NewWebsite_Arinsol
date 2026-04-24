// DOM Element Selectors
const menuOverlay = document.getElementById("menuOverlay");
const openMenuBtn = document.getElementById("openMenu"); // Main Learn More Button
const navMenuBtn = document.getElementById("navMenuBtn"); // Top Nav Menu Button
const closeMenuBtn = document.getElementById("closeMenu");
const links = document.querySelectorAll(".menu-links a");
const carousels = document.querySelectorAll(".photo-carousel");
const activityTrigger = document.getElementById("activityTrigger");
const activitySubMenu = document.getElementById("activitySubMenu");

// Functions to Open/Close Menu
const openMenu = () => menuOverlay.classList.add("active");
const closeMenu = () => menuOverlay.classList.remove("active");

// Event Listeners for Opening/Closing
if (openMenuBtn) openMenuBtn.addEventListener("click", openMenu);
if (navMenuBtn) navMenuBtn.addEventListener("click", openMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeMenu);

// Logic to Switch Photo Carousels in Menu on Hover
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const section = link.getAttribute("data-section");

    // Hide all carousels first
    carousels.forEach((c) => c.classList.remove("active"));

    // Show the carousel matching the data-section attribute
    const target = document.getElementById(`carousel-${section}`);
    if (target) {
      target.classList.add("active");
    }
  });
});

// Toggle Sub-menu for Activity section
if (activityTrigger && activitySubMenu) {
  activityTrigger.addEventListener("click", (e) => {
    e.preventDefault(); // Stop page from jumping
    activitySubMenu.classList.toggle("open"); // Toggles the 'open' class used in CSS
    activityTrigger.classList.toggle("active-link");
  });
}

// Optional: Close menu if clicking outside container
menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) closeMenu();
});
