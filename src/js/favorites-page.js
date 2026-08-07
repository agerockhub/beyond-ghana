import destinations from "../data/destinations.js";
import {
    removeFavorite,
    isFavorite
} from "./favorites.js";


const container = document.querySelector("#favorites-container");


function displayFavorites() {

    const favorites = destinations.filter(destination =>
        isFavorite(destination.id)
    );


    if (favorites.length === 0) {

        container.innerHTML = `
            <h2>No Favorite Destinations Yet</h2>
            <p>Start exploring and add destinations you love.</p>
        `;

        return;
    }


    container.innerHTML = favorites.map(destination => {

        return `
        <article class="favorite-card">

            <img src="${destination.image}" 
                 alt="${destination.name}">


            <h2>${destination.name}</h2>

            <p>${destination.description}</p>

            <p>
              📍 ${destination.location}
            </p>


            <button 
              class="remove-btn"
              data-id="${destination.id}">
              Remove Favorite
            </button>

        </article>
        `;

    }).join("");



    document.querySelectorAll(".remove-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            removeFavorite(id);

            displayFavorites();

        });

    });

}


displayFavorites();