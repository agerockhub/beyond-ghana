const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;


export async function fetchDestinationImages(query) {

    const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=6`,
        {
            headers: {
                Authorization: `Client-ID ${UNSPLASH_KEY}`
            }
        }
    );


    if (!response.ok) {
        throw new Error("Unable to fetch images");
    }


    const data = await response.json();

    return data.results;
}