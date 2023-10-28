import React from "react";
import { Container, Image } from "react-bootstrap";
// import { Component } from '../../../public/banner.webp''

function Hero() {
  return (
    <Container fluid className="mb-4" style={{marginTop: 56}}>
      <Image src={"https://dnuni.fpt.edu.vn/wp-content/uploads/2023/07/Ba%CC%89o-Tha%CC%86%CC%81ng-web-size.png"} fluid />
    </Container>
  );
}

export default Hero;
