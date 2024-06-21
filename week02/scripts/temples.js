document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('last-modified');
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    // Set current year
    yearElement.textContent = new Date().getFullYear();

    // Set last modified date
    lastModifiedElement.textContent = document.lastModified;

    // Toggle navigation menu in mobile view
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
        hamburger.textContent = navbar.classList.contains('open') ? '✖' : '☰';
    });
});
