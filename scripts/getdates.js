// Populate the current year in the footer span
const currentYearSpan = document.querySelector("#currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Populate the last modified date in the footer paragraph
const lastModifiedParagraph = document.querySelector("#lastModified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
}