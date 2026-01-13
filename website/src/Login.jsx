import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./App.jsx";
import * as Yup from "yup";

function Login() { 
  const { loggedUser, setLoggedUser } = useContext(CartContext);
  const [username, setUsername] = useState(loggedUser?.username || "");
  const [email, setEmail] = useState(loggedUser?.email || "");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Show success if user already logged in
  useEffect(() => {
    if (loggedUser) setSuccess(true);
  }, [loggedUser]);
  

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Save logged user info
    setLoggedUser({ username, email });
    setSuccess(true);
  };

  // ✅ Login success view
  if (success) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #ffe6cc, #ffcc99)",
        }}
      >
        <div
          style={{
            padding: "40px",
            borderRadius: "20px",
            background: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            textAlign: "center",
            width: "380px",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "900",
              color: "#ff6600",
              marginBottom: "20px",
            }}
          >
            Login Successful! 🎉
          </h1>
          <p
            style={{
              fontSize: "18px",
              marginBottom: "30px",
              color: "#555",
            }}
          >
            Welcome, {username}! You are now logged in.
          </p>
          <button
            style={{
              padding: "12px 26px",
              borderRadius: "10px",
              background: "#ff6600",
              color: "#fff",
              border: "none",
              fontWeight: "700",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ✅ Login form view (Contact page style)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe6cc, #ffcc99)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "900",
            color: "#ff6600",
            textAlign: "center",
          }}
        >
          Login
        </h1>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              border: "2px solid #ff6600",
              outline: "none",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              border: "2px solid #ff6600",
              outline: "none",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              border: "2px solid #ff6600",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 26px",
              borderRadius: "10px",
              background: "#ff6600",
              color: "#fff",
              border: "none",
              fontWeight: "700",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Login
          </button>
        </form>

        {loggedUser && (
          <p style={{ textAlign: "center", color: "#555", marginTop: "10px" }}>
            Logged in as <strong>{loggedUser.username}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;