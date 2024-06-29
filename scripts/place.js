document.addEventListener("DOMContentLoaded", function() {
    const currentYear = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");

    const date = new Date();
    currentYear.textContent = date.getFullYear();
    lastModified.textContent = `Last Modification: ${document.lastModified}`;

    const temperature = 30; // Static temperature in °C
    const windSpeed = 10; // Static wind speed in km/h

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").textContent = windChill !== "N/A" ? `${windChill}°C` : "N/A";
});

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
    } else {
        return "N/A";
    }
}
