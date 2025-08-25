import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup, useMapEvents } from "react-leaflet";
import axios from "axios";

function AreaDrawer({ onAddPoint }) {
  useMapEvents({
    click(e) {
      onAddPoint([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

function AdminMap({ onAreaUpdated }) {
  const [points, setPoints] = useState([]);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleAddPoint = (latlng) => {
    setPoints([...points, latlng]);
    setMessage("");
  };

  const handleStatusChange = async (newStatus) => {
    setStatus(newStatus);
    try {
      await axios.post("/api/areas", {
        area: points,
        status: newStatus,
      });
      if (onAreaUpdated) onAreaUpdated("Area status updated!");
      setPoints([]);
      setStatus("");
    } catch (err) {
      if (onAreaUpdated) onAreaUpdated("Error updating area.");
    }
  };

  const handleClear = () => {
    setPoints([]);
    setStatus("");
    setMessage("");
  };

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 24 }}>
      <h2>Select Area & Set Status</h2>
      <MapContainer center={[28.61, 77.23]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <AreaDrawer onAddPoint={handleAddPoint} />
        {points.length > 0 && (
          <>
            <Polygon positions={points} color={
              status === "Blocked" ? "red" : status === "Maintenance" ? "orange" : "green"
            } />
            {points.map((pos, idx) => (
              <Marker key={idx} position={pos}>
                <Popup>Point {idx + 1}</Popup>
              </Marker>
            ))}
          </>
        )}
      </MapContainer>
      {points.length > 2 && (
        <div style={{ marginTop: 16 }}>
          <button
            style={{ ...btnStyle, background: "#d32f2f" }}
            onClick={() => handleStatusChange("Blocked")}
          >
            Blocked
          </button>
          <button
            style={{ ...btnStyle, background: "#ffa726" }}
            onClick={() => handleStatusChange("Maintenance")}
          >
            Maintenance
          </button>
          <button
            style={{ ...btnStyle, background: "#388e3c" }}
            onClick={() => handleStatusChange("Cleared")}
          >
            Cleared
          </button>
          <button style={{ ...btnStyle, background: "#555" }} onClick={handleClear}>
            Clear Selection
          </button>
        </div>
      )}
      {message && <div style={{ marginTop: 12, color: "#1976d2" }}>{message}</div>}
      <div style={{ marginTop: 10, fontSize: 14, color: "#888" }}>
        Click on the map to add points. Minimum 3 points required to mark an area.
      </div>
    </div>
  );
}

const btnStyle = {
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "8px 18px",
  marginRight: "10px",
  fontWeight: "bold",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px",
  marginBottom: "8px",
  transition: "background 0.2s",
};
export default AdminMap;