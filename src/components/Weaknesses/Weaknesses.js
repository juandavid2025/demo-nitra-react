import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Weaknesses = () => {
    return (
        <Container>
          <Row>
            <Col>
              <Card className="Card">
                <Card.Img variant="top" src="https://i2.wp.com/www.solojugadores.com/wp-content/uploads/2021/01/Deep-Rock-Galactic-Update-33-misiones-enemigos-biomas-2.jpg?ssl=1" />
                <Card.Body>
                  <Card.Title>Three antennaes</Card.Title>
                  <Card.Text>
                    Once all Hiveguard babies are killed, it open and show it's antennaes, hitting them dealts a great damage to it.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="Card">
                <Card.Img variant="top" src="https://media.tenor.com/images/0af393a439cb283329e119034e6dabdd/tenor.png" />
                <Card.Body>
                  <Card.Title>Main weak point</Card.Title>
                  <Card.Text>
                    When all the antennaes are destroyed the Dreadnought open it's shell, every hit in that exposed zone will deal massive damage with maximun effect.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="Card">
                <Card.Img variant="top" src="https://i0.wp.com/impulsogeek.com/wp-content/uploads/2021/01/DRG33_17_Creatures.jpg?resize=1024%2C576&ssl=1" />
                <Card.Body>
                  <Card.Title>Hiveguard babies</Card.Title>
                  <Card.Text>
                  The hiveguard, when we summon it's babies, will wait for it's creations to make the job, while that the main Dreadnoght is slow and will not attack with much frequency.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
};

export default Weaknesses;
