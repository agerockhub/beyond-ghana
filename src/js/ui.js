export function displayDestinations(destinations) {

    const container = document.getElementById("destination-container");

    container.innerHTML = "";

    destinations.forEach(destination => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">

            <div class="card-content">

                <h3>${destination.name}</h3>

                <p>${destination.description}</p>

                <span>${destination.rating}</span>

            </div>
        `;

        container.appendChild(card);

    });

}