document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById('currentyear');
    const lastModifiedSpan = document.querySelector('#lastModified');

    // Set current year
    yearSpan.textContent = new Date().getFullYear();

    // Set last modified date
    lastModifiedSpan.textContent += document.lastModified;
});

// JavaScript to populate product options dynamically
document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' }
    ];

    const selectProduct = document.getElementById('productName');

    products.forEach(product => {
        let option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        selectProduct.appendChild(option);
    });
});
