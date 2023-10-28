/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Container fluid="xl" style={{ padding: "0 180px" }} id="contact">
        <h1
          style={{
            marginTop: 60,
            marginBottom: 20,
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#f56106",
          }}
        >
          Contact
        </h1>
        <div className="d-flex gap-4">
          <div className="d-flex flex-column align-items-center p-4 bg-dark w-50">
            <i
              class="fa-solid fa-phone"
              style={{ color: "#f56106", fontSize: 24 }}
            ></i>
            <h5 style={{ color: "#f56106", fontSize: 20 }}>Talk to me!</h5>
            <a
              style={{
                color: "#f56106",
                fontSize: 16,
                textDecoration: "none",
                letterSpacing: 2,
              }}
              href="#"
            >
              +84 828 828 497
            </a>
            <p
              style={{
                color: "#fff",
                fontSize: 16,
                textAlign: "center",
                marginTop: 20,
                marginBottom: 0,
              }}
            >
              Interested in my services? Just pick up the phone and talk about
              our bussiness!
            </p>
          </div>
          <div className="d-flex flex-column align-items-center p-4 bg-dark w-50">
            <i
              class="fa-solid fa-envelope"
              style={{ color: "#f56106", fontSize: 24 }}
            ></i>
            <h5 style={{ color: "#f56106", fontSize: 20 }}>Mail to me!</h5>
            <a
              style={{
                color: "#f56106",
                fontSize: 16,
                textDecoration: "none",
                letterSpacing: 2,
              }}
              href="#"
            >
              Thangtvb.dev@gmail.com
            </a>
            <p
              style={{
                color: "#fff",
                fontSize: 16,
                textAlign: "center",
                marginTop: 20,
                marginBottom: 0,
              }}
            >
              If you want to work with me, email is the best way that we can
              contact.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;
