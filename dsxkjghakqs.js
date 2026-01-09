document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const links = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll(".section");

    const toggleMenu = () => {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("active");
    };
ñ
    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("data-section");

            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            sections.forEach(sec => {
                sec.classList.remove("active");
                if (sec.id === targetId) sec.classList.add("active");
            });

            if (window.innerWidth < 768) toggleMenu();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});