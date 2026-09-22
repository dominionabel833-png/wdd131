// 1. Array of Temple Objects (Using local images from your workspace)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/temple1.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/temple2.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/temple3.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/temple4.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/temple5.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/temple6.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/temple7.jpg"
  },
  // Added Temple 1: Salt Lake
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "images/temple8.jpg"
  },
  // Added Temple 2: Rome Italy
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "images/temple9.jpg"
  },
  // Added Temple 3: Tokyo Japan (Make sure you have a temple10.jpg or adjust the filename if needed)
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl: "images/temple3.jpg" 
  }
];

// 2. Select the container element in HTML
const container = document.querySelector(".res-grid");

// 3. Function to dynamically render temple cards
function createTempleCard(filteredTemples) {
  container.innerHTML = ""; // Clear existing cards

  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
    
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    // Append image FIRST so it appears at the top of the card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);

    container.appendChild(card);
  });
}

// Default call to display all temples when the page loads
createTempleCard(temples);

// 4. Filter Event Listeners
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  createTempleCard(temples);
});

oldLink.addEventListener("click", (e) => {
  e.preventDefault();
  let oldTemples = temples.filter(temple => {
    let year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  createTempleCard(oldTemples);
});

newLink.addEventListener("click", (e) => {
  e.preventDefault();
  let newTemples = temples.filter(temple => {
    let year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  createTempleCard(newTemples);
});

largeLink.addEventListener("click", (e) => {
  e.preventDefault();
  let largeTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(largeTemples);
});

smallLink.addEventListener("click", (e) => {
  e.preventDefault();
  let smallTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(smallTemples);
});

// 5. Footer Dynamic Dates
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;