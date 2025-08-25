import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

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
  const [map, setMap] = useState(null);
  const [routingControl, setRoutingControl] = useState(null);
  const [vehicleWidth, setVehicleWidth] = useState("");
  const [vehicleHeight, setVehicleHeight] = useState("");
  const [vehicleLength, setVehicleLength] = useState("");

  useEffect(() => {
    if (map) {
      if (routingControl) {
        map.removeControl(routingControl);
      }

      const newRoutingControl = L.Routing.control({
        waypoints: [],
        routeWhileDragging: true,
      }).addTo(map);

      setRoutingControl(newRoutingControl);
    }
  }, [map]);

  const handleGetRoute = () => {
    if (start && destination && vehicleWidth && vehicleHeight && vehicleLength) {
      if (routingControl) {
        routingControl.setWaypoints([
          L.latLng(start.split(",").map(Number)),
          L.latLng(destination.split(",").map(Number)),
        ]);
      }
    } else {
      alert("Please enter all fields, including vehicle dimensions");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🚗 Driver Dashboard</h2>

      {/* Input Fields */}
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Enter Current Location (lat,lng)"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Enter Destination (lat,lng)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={styles.input}
        />
        <div style={styles.dimensionContainer}>
          <input
            type="number"
            placeholder="Width (m)"
            value={vehicleWidth}
            onChange={(e) => setVehicleWidth(e.target.value)}
            style={styles.dimensionInput}
          />
          <input
            type="number"
            placeholder="Height (m)"
            value={vehicleHeight}
            onChange={(e) => setVehicleHeight(e.target.value)}
            style={styles.dimensionInput}
          />
          <input
            type="number"
            placeholder="Length (m)"
            value={vehicleLength}
            onChange={(e) => setVehicleLength(e.target.value)}
            style={styles.dimensionInput}
          />
        </div>
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
          whenCreated={setMap}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
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
  dimensionContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  dimensionInput: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "80px",
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