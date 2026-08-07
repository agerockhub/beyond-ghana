import { initializeMap } from "./map.js";

import {
    addFavorite,
    removeFavorite,
    isFavorite
} from "./favorites.js";

import destinations from "../data/destinations.js";


const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const destination = destinations.find(d => d.id === id);


const container = document.getElementById("destination-details");


if (!destination) {

    container.innerHTML = `
        <h2>Destination not found.</h2>

        <p>
            The destination you are looking for does not exist.
        </p>

        <a href="index.html" class="details-btn">
            ← Back to Home
        </a>
    `;


} else {


    container.innerHTML = `

        <img
            src="${destination.image}"
            alt="${destination.name}"
            class="details-image">


        <h1>${destination.name}</h1>


        <p>
            <strong>City:</strong> ${destination.city}
        </p>


        <p>
            <strong>Category:</strong> ${destination.category}
        </p>


        <p>
            <strong>Rating:</strong> ⭐ ${destination.rating}
        </p>


        <p>
            <strong>Opening Hours:</strong> ${destination.openingHours}
        </p>


        <p>
            ${destination.fullDescription}
        </p>


        <button id="favorite-btn">

            ${isFavorite(destination.id)
                ? "❤️ Saved"
                : "🤍 Add to Favorites"}

        </button>


        <div id="map">
            <!-- Leaflet OpenStreetMap goes here -->
        </div>

    `;



    // Favorite button functionality
    const favoriteButton = document.getElementById("favorite-btn");


    favoriteButton.addEventListener("click", () => {


        if (isFavorite(destination.id)) {


            removeFavorite(destination.id);


            favoriteButton.textContent =
                "🤍 Add to Favorites";


        } else {


            addFavorite(destination.id);


            favoriteButton.textContent =
                "❤️ Saved";

        }

    });



    // Initialize map
    initializeMap(destination);

}