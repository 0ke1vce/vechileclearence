import React, { useState } from "react";
import axios from "axios";

function Admin() {
  const [roadName, setRoadName] = useState("");
  const [status, setStatus] = useState("Blocked");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!roadName) {
      alert("Please enter road/location name");
      return;
    }

    try {
      // API call to FastAPI backend (adjust port if needed)
      await axios.post("http://127.0.0.1:8000/add-road", {
        name: roadName,
        status: status,
      });

      setMessage(`✅ Road "${roadName}" marked as ${status}`);
      setRoadName("");
      setStatus("Blocked");
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to update road status. Check backend.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🛠️ Admin Dashboard</h2>
      <p>Mark roads as <b>Blocked</b>, <b>Cleared</b>, or <b>Maintenance</b>.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter Road/Location Name"
          value={roadName}
          onChange={(e) => setRoadName(e.target.value)}
          style={styles.input}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={styles.select}
        >
          <option value="Blocked">Blocked</option>
          <option value="Cleared">Cleared</option>
          <option value="Maintenance">Maintenance</option>
        </select>

        <button type="submit" style={styles.btn}>
          Update Road Status
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
  },
  form: {
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    margin: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "250px",
  },
  select: {
    padding: "10px",
    margin: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "200px",
  },
  btn: {
    padding: "10px 20px",
    background: "#ff4757",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  message: {
    marginTop: "20px",
    fontWeight: "bold",
  },
};

export default Admin;
