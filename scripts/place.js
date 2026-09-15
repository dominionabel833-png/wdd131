// Footer dynamic content: current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static temperature and wind speed values matching the HTML content
const tempC = 10; // °C
const windSpeedKm = 5; // km/h

// Requirement: Single-line function using the Metric wind chill formula
const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

// Check viability conditions before executing function (Metric: T <= 10 °C and V > 4.8 km/h)
const windChillElement = document.getElementById("windchill");

if (tempC <= 10 && windSpeedKm > 4.8) {
  const result = calculateWindChill(tempC, windSpeedKm);
  windChillElement.textContent = `${result.toFixed(1)} °C`;
} else {
  windChillElement.textContent = "N/A";
}