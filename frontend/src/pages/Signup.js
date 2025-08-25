import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/signup", {
        username,
        password,
      });
      setMessage(res.data.message);
      setTimeout(() => navigate("/login"), 1500); // redirect after signup
    } catch (err) {
      setMessage(err.response?.data?.detail || "Signup failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Signup</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSignup} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth: "400px", margin: "50px auto", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc" },
  button: { padding: "10px", background: "#28a745", color: "white", border: "none", borderRadius: "6px" },
};

export default Signup;
