document.addEventListener("DOMContentLoaded", function() {
    // Set current year
    const yearSpan = document.getElementById('currentyear');
    yearSpan.textContent = new Date().getFullYear();

    // Set last modified date
    const lastModifiedParagraph = document.getElementById('lastModified');
    lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
});