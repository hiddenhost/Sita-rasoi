// Optional: You can add interactive features if needed
document.addEventListener("DOMContentLoaded", () => {
    console.log("Navbar loaded successfully!");
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Toggle dropdown inside menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}