import { fetchDestinationImages } from "./api.js";


export async function displayGallery(destinationName) {

    const galleryContainer = document.getElementById("gallery");


    if (!galleryContainer) return;


    galleryContainer.innerHTML = `
        <p>Loading images...</p>
    `;


    try {

        const images = await fetchDestinationImages(destinationName);


        galleryContainer.innerHTML = images.map(image => {

            return `
                <img 
                    src="${image.urls.small}"
                    alt="${image.alt_description || destinationName}">
            `;

        }).join("");


    } catch (error) {

        galleryContainer.innerHTML = `
            <p>
                Unable to load images at this time.
            </p>
        `;

        console.error(error);

    }

}