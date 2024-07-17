document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById('currentyear');
    const lastModifiedSpan = document.querySelector('#lastModified')
    
    // Set current year
    yearSpan.textContent = new Date().getFullYear();

    // Set last modified date
    lastModifiedSpan.textContent += document.lastModified;

});