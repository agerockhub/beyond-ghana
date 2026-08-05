import destinations from "../data/destinations.js";
import { displayDestinations } from "./ui.js";

// Display all destinations initially
displayDestinations(destinations);

// ============================
// SEARCH
// ============================

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase();

    const filteredDestinations = destinations.filter(destination =>

        destination.name.toLowerCase().includes(searchText) ||

        destination.city.toLowerCase().includes(searchText) ||

        destination.category.toLowerCase().includes(searchText)

    );

    displayDestinations(filteredDestinations);

});

// ============================
// MOBILE MENU
// ============================

const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuButton.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuButton.textContent = "☰";

    });

});

console.log("Beyond Ghana loaded successfully.");