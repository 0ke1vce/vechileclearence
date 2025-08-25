import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom icons for different statuses
const blockedIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/565/565547.png",
  iconSize: [32, 32],
});

const clearedIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  iconSize: [32, 32],
});

const maintenanceIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/595/595067.png",
  iconSize: [32, 32],
});

// Example road data (later can come from backend API)
const roadData = [
  {
    id: 1,
    status: "Blocked",
    coords: [28.6139, 77.209], // Delhi
    description: "Major accident, road closed.",
  },
  {
    id: 2,
    status: "Cleared",
    coords: [28.7041, 77.1025], // Delhi West
    description: "Route open and safe.",
  },
  {
    id: 3,
    status: "Maintenance",
    coords: [28.5355, 77.391], // Noida
    description: "Construction work ongoing.",
  },
];

function MapPage() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h2 style={{ textAlign: "center", padding: "10px" }}>
        🚦 Live Route Clearance Map
      </h2>
      <MapContainer
        center={[28.6139, 77.209]} // Default center Delhi
        zoom={11}
        style={{ height: "90%", width: "100%" }}
      >
        {/* Map Tiles */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Markers from roadData */}
        {roadData.map((road) => (
          <Marker
            key={road.id}
            position={road.coords}
            icon={
              road.status === "Blocked"
                ? blockedIcon
                : road.status === "Cleared"
                ? clearedIcon
                : maintenanceIcon
            }
          >
            <Popup>
              <strong>Status:</strong> {road.status} <br />
              <strong>Details:</strong> {road.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapPage;
