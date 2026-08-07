import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons for Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export function initializeMap(destination) {
  // Create the map
  const map = L.map("map").setView(
    [destination.latitude, destination.longitude],
    13
  );

  // OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; OpenStreetMap contributors',
  }).addTo(map);

  // Marker
  L.marker([destination.latitude, destination.longitude])
    .addTo(map)
    .bindPopup(`<strong>${destination.name}</strong>`)
    .openPopup();
}