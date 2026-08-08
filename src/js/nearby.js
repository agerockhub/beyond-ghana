const OVERPASS_API =
    "https://overpass-api.de/api/interpreter";


export async function fetchNearbyPlaces(latitude, longitude) {

    const radius = 5000;


    const query = `
        [out:json];

        (
            node["amenity"="restaurant"]
                (around:${radius},${latitude},${longitude});

            node["tourism"="hotel"]
                (around:${radius},${latitude},${longitude});

            node["tourism"="attraction"]
                (around:${radius},${latitude},${longitude});
        );

        out body;
    `;


    const response = await fetch(
        `${OVERPASS_API}?data=${encodeURIComponent(query)}`
    );


    if (!response.ok) {
        throw new Error("Unable to fetch nearby places.");
    }


    const data = await response.json();

    return data.elements;
}


export function displayNearbyPlaces(places) {

    const container =
        document.getElementById("nearby-container");


    if (!container) return;


    if (places.length === 0) {

        container.innerHTML = `
            <p>
                No nearby places were found.
            </p>
        `;

        return;
    }


    container.innerHTML = places
        .slice(0, 9)
        .map(place => {

            const name =
                place.tags?.name || "Unnamed place";


            let type = "Place";


            if (place.tags?.amenity === "restaurant") {
                type = "🍽 Restaurant";
            }

            else if (place.tags?.tourism === "hotel") {
                type = "🏨 Hotel";
            }

            else if (place.tags?.tourism === "attraction") {
                type = "📍 Attraction";
            }


            return `
                <article class="nearby-card">

                    <h3>${name}</h3>

                    <p>${type}</p>

                </article>
            `;

        })
        .join("");
}