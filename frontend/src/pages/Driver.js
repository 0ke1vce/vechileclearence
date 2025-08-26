import React, { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// Fix marker icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Component to handle map clicks for routing
function LocationSelector({ waypoints, onWaypointsChange }) {
  useMapEvents({
    click(e) {
      if (waypoints.length < 2) {
        const newWaypoints = [...waypoints, e.latlng];
        onWaypointsChange(newWaypoints);
      }
    },
  });

  return (
    <>
      {waypoints.map((point, index) => (
        <Marker key={index} position={point} />
      ))}
    </>
  );
}

function Driver() {
  const [map, setMap] = useState(null);
  const [routingControl, setRoutingControl] = useState(null);
  const [waypoints, setWaypoints] = useState([]);

  // Initialize the routing control
  useEffect(() => {
    if (map && !routingControl) {
      const control = L.Routing.control({
        waypoints: [],
        routeWhileDragging: false,
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false,
      }).addTo(map);
      setRoutingControl(control);
    }
  }, [map, routingControl]);

  // Update route when waypoints change
  useEffect(() => {
    if (routingControl) {
      if (waypoints.length === 2) {
        routingControl.setWaypoints(waypoints);
      } else {
        // Clear the route if waypoints are reset
        routingControl.setWaypoints([]);
      }
    }
  }, [routingControl, waypoints]);

  const handleWaypointsChange = useCallback((newWaypoints) => {
    setWaypoints(newWaypoints);
  }, []);

  const handleReset = () => {
    setWaypoints([]);
  };

  return (
    <div style={styles.container}>
      <h2>🚗 Driver Dashboard</h2>
      <p style={styles.instructions}>
        {waypoints.length === 0 && "Click on the map to set your start point."}
        {waypoints.length === 1 && "Click on the map to set your destination point."}
        {waypoints.length === 2 && "Route is displayed below."}
      </p>

      {/* Map Display */}
      <div style={styles.mapContainer}>
        <MapContainer
          center={[28.6139, 77.209]} // Delhi default
          zoom={11}
          style={{ height: "500px", width: "100%" }}
          whenCreated={setMap}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationSelector
            waypoints={waypoints}
            onWaypointsChange={handleWaypointsChange}
          />
        </MapContainer>
      </div>
      <button onClick={handleReset} style={styles.btn}>
        Reset Route
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
  },
  instructions: {
    fontSize: "1.1em",
    margin: "10px 0 20px",
    color: "#555",
  },
  btn: {
    padding: "10px 20px",
    background: "#ff4757",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "20px",
  },
  mapContainer: {
    border: "2px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
  },
};

export default Driver;