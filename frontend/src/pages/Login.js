import React, { useState } from "react";
import axios from "axios";

const styles = {
  container: {
    maxWidth: 400,
    margin: "60px auto",
    padding: "32px",
    background: "linear-gradient(120deg, #222 70%, #444 100%)",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
    color: "#fff",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "24px",
    textAlign: "center",
    letterSpacing: "1px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "none",
    fontSize: "1rem",
    background: "#333",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#ffd700",
    color: "#222",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1.1rem",
    cursor: "pointer",
    marginTop: "18px",
    transition: "background 0.2s",
  },
  error: {
    background: "#ffebee",
    color: "#d32f2f",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "12px",
    textAlign: "center",
    fontWeight: "bold",
  },
  success: {
    background: "#e3f2fd",
    color: "#1976d2",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "12px",
    textAlign: "center",
    fontWeight: "bold",
  }
};

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSuccess(false);
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      if (res.data.success) {
        setSuccess(true);
        setMsg("Login successful!");
        if (onLogin) onLogin(res.data.user);
      } else {
        setMsg(res.data.message || "Login failed.");
      }
    } catch (err) {
      setMsg("Invalid username or password.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Login</div>
      {msg && (
        <div style={success ? styles.success : styles.error}>{msg}</div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button style={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
