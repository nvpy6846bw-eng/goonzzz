```javascript
/*==========================================
  GOONZBLENDZ
  SCRIPT.JS
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
      Loading Screen
    =========================*/

    window.addEventListener("load", () => {
        document.body.classList.add("loaded");
    });

    // Also handle cases where the page is already loaded.
    if (document.readyState === "complete") {
        document.body.classList.add("loaded");
    }


    /*=========================
      Mobile Navigation
    =========================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    function closeMenu() {
        if (!menuBtn || !navLinks) return;

        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

    if (menuBtn && navLinks) {

        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Toggle navigation");

        menuBtn.addEventListener("click", () => {

           
