// Dynamic Footer Year & Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger Menu Toggle Functionality
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#hamburger');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    if (mainnav.classList.contains('open')) {
        hambutton.innerHTML = '&#10005;'; // 'X' symbol
    } else {
        hambutton.innerHTML = '&#9776;'; // Hamburger symbol
    }
});