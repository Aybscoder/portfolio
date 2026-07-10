// =============================
// AYOOBI PORTFOLIO
// Main Entry File
// =============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 Portfolio Loaded Successfully");

    // Initialize Theme
    if (typeof initTheme === "function") {
        initTheme();
    }

    // Initialize Navigation
    if (typeof initNavigation === "function") {
        initNavigation();
    }

    // Initialize Animations
    if (typeof initAnimations === "function") {
        initAnimations();
    }

});
console.log("Portfolio Loaded Successfully");

const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            scrollBtn.style.display = "flex";
        } else {
            scrollBtn.style.display = "none";
        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}