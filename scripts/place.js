const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = "Last modified: " + document.lastModified;


document.addEventListener('DOMContentLoaded', () => {
    const tempElem = document.getElementById('temp');
    const windElem = document.getElementById('wind-speed');
    const windChillElem = document.getElementById('wind-chill');

    const temperature = parseFloat(tempElem.textContent);
    const windSpeedKmh = parseFloat(windElem.textContent);

    const windSpeedMs = windSpeedKmh / 3.6;

    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    if (temperature <= 10 && windSpeedKmh > 4.8) {
        const wc = calculateWindChill(temperature, windSpeedKmh);
        windChillElem.textContent = wc.toFixed(1) + ' °C';
    } else {
        windChillElem.textContent = 'N/A';
    }
});
