const STORAGE_KEY = "beyondGhanaFavorites";

// Get all favorites
export function getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Check if a destination is already a favorite
export function isFavorite(id) {
    return getFavorites().includes(id);
}

// Add a favorite
export function addFavorite(id) {
    const favorites = getFavorites();

    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }
}

// Remove a favorite
export function removeFavorite(id) {
    const favorites = getFavorites().filter(favId => favId !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}