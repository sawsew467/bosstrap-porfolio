import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        padding: "60px 180px",
        marginTop: 60,
        color: "white",
      }}
      className="bg-dark mt d-flex flex-row"
    >
      <div className="d-flex flex-column" style={{ flex: 1 }}>
        <h3>Thangtvb.dev</h3>
        <p style={{ width: 200 }}>© 2022, Built and designed by ThangTVB</p>
      </div>
      <div className="d-flex flex-column" style={{ width: 200 }}>
        <h5>Links</h5>
        <a style={{ textDecoration: "none", color: "#f56106" }} href="#about">
          About
        </a>
        <a
          style={{ textDecoration: "none", color: "#f56106" }}
          href="#projects"
        >
          Projects
        </a>
        <a style={{ textDecoration: "none", color: "#f56106" }} href="#contact">
          Contact
        </a>
      </div>
      <div className="d-flex flex-column" style={{ width: 200, color: "#fff" }}>
        <div className="d-flex flex-column" style={{ width: 200 }}>
          <h5>Get in touch</h5>
          <a style={{ textDecoration: "none", color: "#f56106" }} href="#about">
            Github
          </a>
          <a
            style={{ textDecoration: "none", color: "#f56106" }}
            href="#projects"
          >
            Facebook
          </a>
          <a
            style={{ textDecoration: "none", color: "#f56106" }}
            href="#projects"
          >
            Gmail
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
