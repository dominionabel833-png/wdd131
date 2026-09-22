// 1. Array of Product Objects
const products = [
  {
    id: "fc-200",
    name: "Flux Capacitor (FC-200)",
    averagerating: 4.5
  },
  {
    id: "pcr-3000",
    name: "Power Converter 3000",
    averagerating: 4.7
  },
  {
    id: "hnd-500",
    name: "Hoverboard X-500",
    averagerating: 3.5
  },
  {
    id: "ap-900",
    name: "Aero-Propulsion Unit",
    averagerating: 4.8
  },
  {
    id: "qg-101",
    name: "Quantum Generator",
    averagerating: 4.2
  }
];

// 2. Dynamically Populate the Product Select Options
const productSelect = document.querySelector("#productName");

if (productSelect) {
  products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// 3. Footer Dynamic Year
const currentYearSpan = document.querySelector("#currentyear");
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}