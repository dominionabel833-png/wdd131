// 1. Array of Product Objects (Official Course Data)
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// 2. Dynamically Populate the Product Select Options (on form.html)
const productSelect = document.querySelector("#productName");

if (productSelect) {
  products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// 3. LocalStorage Counter (on review.html)
const reviewCountDisplay = document.querySelector("#reviewCount");

if (reviewCountDisplay) {
  // Get current count from localStorage or initialize to 0
  let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;
  
  // Increment count
  reviewCount++;
  
  // Store updated count back to localStorage
  window.localStorage.setItem("reviewCount-ls", reviewCount);
  
  // Display count on page
  reviewCountDisplay.textContent = reviewCount;
}

// 4. Footer Dynamic Year
const currentYearSpan = document.querySelector("#currentyear");
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}