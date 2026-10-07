// --- 1. Dynamic Footer Year ---
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// --- 2. Trail Objects and Arrays (for trails.html) ---
const trails = [
    {
        name: "Pine Creek Trail",
        location: "Blue Ridge Mountains",
        difficulty: "Beginner",
        length: "2.5 miles",
        description: "A gentle, scenic loop winding alongside a peaceful creek with plenty of shade.",
        image: "images/place_small.webp"
    },
    {
        name: "Eagle Rock Ridge",
        location: "Highland Valley",
        difficulty: "Intermediate",
        length: "4.8 miles",
        description: "A steady climb leading to a breathtaking panoramic overlook of the valley.",
        image: "images/place_large.webp"
    },
    {
        name: "Summit Peak Challenge",
        location: "Alpine Crest",
        difficulty: "Advanced",
        length: "8.2 miles",
        description: "A rigorous backcountry trail featuring steep inclines and rocky terrain for experienced hikers.",
        image: "images/place_large.webp"
    }
];

const trailContainer = document.getElementById("trail-container");

if (trailContainer) {
    // Using Array methods and Template Literals to render cards dynamically
    trailContainer.innerHTML = trails.map(trail => {
        return `
            <div class="trail-card">
                <img src="${trail.image}" alt="${trail.name}" loading="lazy" width="300">
                <h3>${trail.name}</h3>
                <p><strong>Location:</strong> ${trail.location}</p>
                <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
                <p><strong>Length:</strong> ${trail.length}</p>
                <p>${trail.description}</p>
            </div>
        `;
    }).join("");
}

// --- 3. Form Handling & localStorage (for contact.html) ---
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("form-feedback");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual page reload for validation/storage demonstration

        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const experience = document.getElementById("experience").value;

        // Conditional Branching example
        if (fullName === "" || email === "" || experience === "") {
            formFeedback.textContent = "Please fill out all required fields.";
            formFeedback.style.color = "red";
            return;
        }

        // Create user object
        const memberData = {
            name: fullName,
            email: email,
            experience: experience,
            dateJoined: new Date().toLocaleDateString()
        };

        // Save to localStorage
        localStorage.setItem("trailBlazerMember", JSON.stringify(memberData));

        // Display feedback using Template Literals
        formFeedback.innerHTML = `Thank you, ${memberData.name}! Your application has been saved successfully. We look forward to seeing you on the trails!`;
        formFeedback.style.color = "green";

        contactForm.reset();
    });
}