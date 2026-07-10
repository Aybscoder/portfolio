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

const scrollBtn=document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

    scrollBtn.style.display=window.scrollY>500?"flex":"none";

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});