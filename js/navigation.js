function initNavigation() {

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    if (!menuToggle || !nav) return;

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");
        document.body.classList.toggle("menu-open");

    });

    document.querySelectorAll("#nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });

}