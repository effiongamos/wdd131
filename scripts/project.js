// script of pop-up message or announcement
document.addEventListener('DOMContentLoaded', () => {
    const announcement = document.getElementById('announcement');
    const announcementTitle = document.getElementById('announcement-title');
    const announcementText = document.getElementById('announcement-text');
    const contactInfo = document.getElementById('contact-info');

    const messages = [
        {
            title: 'Exciting News!',
            text: 'We are thrilled to announce our upcoming expansion with new services and products!',
            contact: 'Stay tuned for more details. Contact us anytime!'
        },
        {
            title: 'What\'s Next for Estamabenco Baking/Catering?',
            text: 'We\'re expanding! Along with our delicious puff-puff, we\'ll soon offer catering services and quality slippers and foodstuffs.',
            contact: 'Contact us for tasty meals and top-quality goods. We\'re here to serve you!'
        }
    ];

    let currentMessage = 0;

    function updateAnnouncement() {
        const message = messages[currentMessage];
        announcementTitle.textContent = message.title;
        announcementText.textContent = message.text;
        contactInfo.textContent = message.contact;

        currentMessage = (currentMessage + 1) % messages.length;
    }
    // Update content every 5 seconds
    updateAnnouncement();
    setInterval(updateAnnouncement, 5000);
});
// script for images in the content
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    };
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    };
    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    };
    // Event listeners for the carousel buttons (optional)
    document.getElementById('next-slide').addEventListener('click', nextSlide);
    document.getElementById('prev-slide').addEventListener('click', prevSlide);
    showSlide(currentSlide);
    // Automatically slide every 10 seconds (10000 milliseconds)
    setInterval(nextSlide, 10000);
});

// script for testimonial
document.addEventListener('DOMContentLoaded', () => {
    const testimonialImages = document.querySelectorAll('.testimonial-img');
    testimonialImages.forEach((img) => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});
// script for header and footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById('currentyear');
    const lastModifiedSpan = document.querySelector('#lastModified');
    const hamburgerButton = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    // Set current year
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    // Set last modified date
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent += document.lastModified;
    }
    // Toggle menu on hamburger click
    hamburgerButton.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburgerButton.textContent = menu.classList.contains('active') ? '✖' : '☰';
    });
});

// script of newletter 
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Hide the form
    document.getElementById('newsletter-form').style.display = 'none';
    // Show the thank you message
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';
    // Add additional content to the thank you message
    const additionalContent = document.createElement('div');
    additionalContent.innerHTML = `
        <p>Stay tuned for exciting updates and exclusive offers!</p>
        <p>Check your email for a welcome message from us.</p>
        <p>Have a great day! 😊</p>
    `;
    thankYouMessage.appendChild(additionalContent);
});