import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../images/logo.jpg";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="logo">
        <img src={logo} alt="Logo Image" style={{ width: "200px", border: "1px solid red" }}/>
      </div>
      <div id="links">
        <p>Home</p>
        <p>About Us</p>
        <p>Contact</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar />);
