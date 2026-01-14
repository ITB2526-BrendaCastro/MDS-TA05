document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const links = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll(".section");

    // Abrir/cerrar menú
    const toggleMenu = () => {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("active");
    };

    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);

    // Navegación entre secciones
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("data-section");

            // Cambiar estado visual del menú
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // Mostrar sección correspondiente
            sections.forEach(sec => {
                sec.classList.remove("active");
                if (sec.id === targetId) sec.classList.add("active");
            });

            // Cerrar menú en móvil
            if (window.innerWidth < 768) toggleMenu();

            // Subir arriba suavemente
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});