document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById('currentyear');
    const lastModifiedSpan = document.querySelector('#lastModified')
    const hamburgerButton = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    // Set current year
    yearSpan.textContent = new Date().getFullYear();

    // Set last modified date
    lastModifiedSpan.textContent += document.lastModified;
    // Toggle menu on hamburger click
    hamburgerButton.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburgerButton.textContent = menu.classList.contains('active') ? '✖' : '☰';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
          templeName: "Salt Lake",
          location: "Salt Lake City, Utah, United States",
          dedicated: "1893, April, 6",
          area: 253015,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/800x500/salt-lake-temple-37762.jpg"
        },
        {
          templeName: "Rome Italy",
          location: "Rome, Italy",
          dedicated: "2019, March, 10",
          area: 40480,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/1-Rome-Temple-2160936.jpg"
        },
        {
          templeName: "Accra Ghana",
          location: "Accra, Ghana",
          dedicated: "2004, January, 11",
          area: 17000,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x450/accra-ghana-temple-detail-249022-2400x1200.jpg"
        },
        {
          templeName: "Provo City Center",
          location: "Provo, Utah, United States",
          dedicated: "2016, March, 20",
          area: 85000,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/800x500/Provo-City-Center-Temple03.jpg"
        },
        {
          templeName: "São Paulo Brazil",
          location: "São Paulo, Brazil",
          dedicated: "1978, October, 30",
          area: 135000,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/800x500/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
        },
      ];
    const gallery = document.querySelector('.gallery');

    const displayTemples = (templesToDisplay) => {
        gallery.innerHTML = '';
        templesToDisplay.forEach(temple => {
            const figure = document.createElement('figure');
            figure.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Size: ${temple.area} sq ft</p>
                </figcaption>
            `;
            gallery.appendChild(figure);
        });
    };

    const filterTemples = (criteria) => {
        let filteredTemples = [];
        switch(criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }
        displayTemples(filteredTemples);
    };

    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.getAttribute('data-filter');
            filterTemples(filter);
        });
    });

    // Initially display all temples
    displayTemples(temples);
});
