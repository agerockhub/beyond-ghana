import destinations from "../data/destinations.js";
import { displayDestinations } from "./ui.js";

// Display all destinations initially
displayDestinations(destinations);

// ============================
// SEARCH + CATEGORY FILTER
// ============================

const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");

function filterDestinations() {

    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = destinations.filter(destination => {

        const matchesSearch =

            destination.name.toLowerCase().includes(searchText) ||

            destination.city.toLowerCase().includes(searchText) ||

            destination.category.toLowerCase().includes(searchText);

        const matchesCategory =

            selectedCategory === "all" ||

            destination.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    displayDestinations(filtered);

}

searchInput.addEventListener("input", filterDestinations);

categoryFilter.addEventListener("change", filterDestinations);
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