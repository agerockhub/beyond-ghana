import destinations from "../data/destinations.js";
import { displayDestinations } from "./ui.js";

// Display destination cards
displayDestinations(destinations);

// Mobile navigation
const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuButton.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.textContent = "☰";
    });
});

console.log("Beyond Ghana loaded successfully.");