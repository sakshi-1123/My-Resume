// main.js

// Run after page loads
window.onload = function() {
    console.log("Website loaded successfully!");
};

// Highlight the active nav link based on the page
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// Example: collapse/expand sections in resume.html
document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".resume h2");

    headers.forEach(header => {
        header.style.cursor = "pointer"; // show clickable cursor
        header.addEventListener("click", function() {
            let nextElement = header.nextElementSibling;
            if (nextElement) {
                if (nextElement.style.display === "none") {
                    nextElement.style.display = "block";
                } else {
                    nextElement.style.display = "none";
                }
            }
        });
    });
});

// Example: interactive greeting on index.html
const bioSection = document.querySelector(".bio");
if (bioSection) {
    bioSection.addEventListener("mouseover", function() {
        bioSection.style.backgroundColor = "#f9f9f9";
    });
    bioSection.addEventListener("mouseout", function() {
        bioSection.style.backgroundColor = "white";
    });
}
