document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById('currentyear');
    const lastModifiedSpan = document.getElementById('lastModified');
    const hamburgerButton = document.querySelector('.hamburger');
    const menu = document.querySelector('nav.menu');

    // Set current year
    yearSpan.textContent = new Date().getFullYear();

    // Set last modified date
    lastModifiedSpan.textContent = document.lastModified;

    // Toggle menu on hamburger click
    hamburgerButton.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburgerButton.textContent = menu.classList.contains('active') ? '✖' : '☰';
    });
});
