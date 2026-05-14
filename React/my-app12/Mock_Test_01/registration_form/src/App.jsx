import React from "react";

function App() {
  const field = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  };

  const heading = {
    color: "blue",
    textAlign: "center",
    fontFamily: "Arial",
  };

const button1 ={
  backgroundColor: "blue",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "20px",
  width: "100%",
}
  return (
    <div>
  <h1 style={heading}>REGISTRATION FORM</h1>

  <form>
  <input type="text" style={field} placeholder="Student Name" required />
  <br />

  <input type="email" style={field} placeholder="Email" required />
  <br />

  <input type="password" style={field} placeholder="Password" required />
  <br />

  <input  type="text" style={field} placeholder="Course" required />
  <br />

  <input type="tel" style={field} placeholder="Mobile Number" required />
  <br />

  <button type="submit" style={button1}>Register</button>
  </form>
  </div>
  );
}

export default App;