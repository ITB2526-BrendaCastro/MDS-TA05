document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const links = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll(".section");

    // Función para abrir/cerrar menú
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

            // 1. Actualizar links activos
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // 2. Cambiar sección visible
            sections.forEach(sec => {
                sec.classList.remove("active");
                if (sec.id === targetId) {
                    sec.classList.add("active");
                }
            });

            // 3. Si estamos en móvil, cerrar menú al hacer click
            if (window.innerWidth < 768) {
                toggleMenu();
            }

            // Opcional: Volver al inicio de la página al cambiar sección
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});