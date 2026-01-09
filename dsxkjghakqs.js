const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll(".section");

hamburger.addEventListener("click", () => {
    sidebar.style.left = sidebar.style.left === "0px" ? "-240px" : "0px";
});

links.forEach(link => {
    link.addEventListener("click", () => {
        sections.forEach(sec => sec.classList.remove("active"));
        document.getElementById(link.dataset.section).classList.add("active");

        if (window.innerWidth < 768) {
            sidebar.style.left = "-240px";
        }
    });
});