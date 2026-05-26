import React, { useEffect, useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!formData.name.trim()) err.name = "Name required";
    if (!formData.email.includes("@")) err.email = "Invalid email";
    if (formData.password.length < 6)
      err.password = "Min 6 characters required";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();

    if (Object.keys(err).length) {
      setErrors(err);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Registration Successful!");
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e9eef5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >
      {/* CARD */}
      <div
        style={{
          width: "420px",
          backgroundColor: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
          color: "#111"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#111" }}>
          Registration Form
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}

          <input
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.password && <p style={errorStyle}>{errors.password}</p>}

          <button style={buttonStyle}>Register</button>
        </form>

        {success && <p style={successStyle}>{success}</p>}

        {/* USER DATA */}
        <div style={{ marginTop: "25px" }}>
          <h3 style={{ textAlign: "center", color: "#222" }}>
            User Data from API
          </h3>

          {loading ? (
            <p style={{ textAlign: "center", color: "#444" }}>Loading...</p>
          ) : user ? (
            <div style={cardStyle}>
              <p style={textStyle}>
                <b>Name:</b> {user.name}
              </p>
              <p style={textStyle}>
                <b>Email:</b> {user.email}
              </p>
              {/* <p style={textStyle}>
                <b>Username:</b> {user.username}
              </p> */}
            </div>
          ) : (
            <p style={{ textAlign: "center" }}>No user found</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* STYLES */
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "6px",
  border: "1px solid #bbb",
  outline: "none",
  fontSize: "14px",
  color: "#111",
  backgroundColor: "#fff"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "15px"
};

const errorStyle = {
  color: "red",
  fontSize: "12px",
  marginTop: "2px"
};

const successStyle = {
  color: "green",
  textAlign: "center",
  marginTop: "10px",
  fontWeight: "bold"
};

const cardStyle = {
  backgroundColor: "#f8fafc",
  padding: "12px",
  borderRadius: "8px",
  marginTop: "10px",
  border: "1px solid #ddd"
};

const textStyle = {
  color: "#111",
  margin: "5px 0"
};

export default App;