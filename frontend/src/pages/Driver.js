import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function Driver() {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [route, setRoute] = useState([]);

  // Fake route generator (demo purpose)
  const handleGetRoute = () => {
    if (start && destination) {
      // Example coordinates for Delhi
      const demoRoute = [
        [28.6139, 77.209], // India Gate
        [28.7041, 77.1025], // Delhi West
        [28.5355, 77.391], // Noida
      ];
      setRoute(demoRoute);
    } else {
      alert("Please enter both start and destination");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🚗 Driver Dashboard</h2>

      {/* Input Fields */}
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Enter Current Location"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleGetRoute} style={styles.btn}>
          Get Safe Route
        </button>
      </div>

      {/* Map Display */}
      <div style={styles.mapContainer}>
        <MapContainer
          center={[28.6139, 77.209]} // Delhi default
          zoom={11}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Show route on map */}
          {route.length > 0 && (
            <>
              {route.map((point, index) => (
                <Marker key={index} position={point} />
              ))}
              <Polyline positions={route} color="blue" />
            </>
          )}
        </MapContainer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    margin: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "250px",
  },
  btn: {
    padding: "10px 20px",
    background: "#0072ff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  mapContainer: {
    marginTop: "20px",
    border: "2px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
  },
};

export default Driver;
