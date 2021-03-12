import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./Title.css";

const title = () => {
  return (
    <Jumbotron fluid>
      <Container className="container">
        <Image className="title-image" src="https://external-preview.redd.it/3J2joJCggECnzDMbYXPd00TKQdIZcwlshMp_wBO1YAo.png?format=pjpg&auto=webp&s=eb0db2c131f56af0bf80fdfee1d8be9e7fa71824" fluid/>
        <h1>Dreadnought Hiveguard</h1>
        <p>
        The Dreadnought Hiveguard is an interrupted progression in the Dreadnought metamorphosis. Currently R&D is not in agreement on what the final form would be like but everyone agrees that it is bad enough. Besides its own attacks, the Hiveguard is able to summon reinforcements to aid it in battle.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default title;
