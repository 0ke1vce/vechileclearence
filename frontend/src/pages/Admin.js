import React, { useEffect, useState } from "react";
import AdminMap from "./AdminMap";
import axios from "axios";

function AdminPage() {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchAreas();
  }, []);

  const fetchAreas = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/areas");
      setAreas(res.data);
    } catch (err) {
      setAreas([]);
      setMessage("Error loading areas.");
    }
    setLoading(false);
  };

  // Callback for AdminMap to notify when an area is updated
  const handleAreaUpdated = (msg) => {
    setMessage(msg);
    fetchAreas();
  };

  return (
    <div style={{ maxWidth: 1100, margin: "auto", padding: 24 }}>
      <h1>Admin Dashboard</h1>
      {message && (
        <div style={{
          background: "#e3f2fd",
          color: "#1976d2",
          padding: "10px 18px",
          borderRadius: "6px",
          marginBottom: "18px",
          fontWeight: "bold"
        }}>
          {message}
        </div>
      )}
      <AdminMap onAreaUpdated={handleAreaUpdated} />
      <h2 style={{ marginTop: 32 }}>All Areas & Status</h2>
      {loading ? (
        <div>Loading...</div>
      ) : areas.length === 0 ? (
        <div>No areas marked yet.</div>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 12 }}>
          <thead>
            <tr style={{ background: "#222", color: "#fff" }}>
              <th style={thStyle}>Area Points</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Last Updated</th>
              <th style={thStyle}>History</th>
            </tr>
          </thead>
          <tbody>
            {areas.map((area, idx) => (
              <tr key={idx} style={{ background: idx % 2 ? "#f5f5f5" : "#fff" }}>
                <td style={tdStyle}>
                  {area.area.map((pt, i) => (
                    <span key={i}>[{pt[0].toFixed(4)}, {pt[1].toFixed(4)}] </span>
                  ))}
                </td>
                <td style={tdStyle}>
                  <span style={{
                    color: area.status === "Blocked" ? "red" :
                          area.status === "Maintenance" ? "orange" : "green",
                    fontWeight: "bold"
                  }}>
                    {area.status}
                  </span>
                </td>
                <td style={tdStyle}>{new Date(area.updatedAt).toLocaleString()}</td>
                <td style={tdStyle}>
                  {area.history && area.history.length > 0 ? (
                    <ul style={{ margin: 0, paddingLeft: 16 }}>
                      {area.history.map((h, hi) => (
                        <li key={hi}>
                          {h.status} at {new Date(h.time).toLocaleString()}
                        </li>
                      ))}
                    </ul>
                  ) : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const thStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  fontWeight: "bold",






 



};

const tdStyle = {
  padding: "8px",
  border: "1px solid #ddd",
  fontSize: "15px",
};

export default AdminPage;
