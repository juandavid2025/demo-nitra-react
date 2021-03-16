import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Attacks.css";

const Attacks = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="Card">
            <Card.Img variant="top" src="https://media.tenor.com/images/0af393a439cb283329e119034e6dabdd/tenor.png" />
            <Card.Body>
              <Card.Title>Slash and bite</Card.Title>
              <Card.Text>
                Quick and powerful hit which can easily leave a mark even in the strongest dwarf, destroying shields and taking down those who couldn't resist the pointed rock fight.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="Card">
            <Card.Img variant="top" src="https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/2/2e/Dreadnought_Hiveguard_Fire_Mortar.png/revision/latest/scale-to-width-down/772?cb=20210226022338" />
            <Card.Body>
              <Card.Title>Fire Mortar</Card.Title>
              <Card.Text>
                Slow and long rage attack that melted and break the tougher land, it is as hot as planet's core, burning skin, shields and hair like paper. The worst nightmare of a pride beard.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="Card">
            <Card.Img variant="top" src="https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/6/65/Glyphid_Dreadnought_Hiveguard_Rock_Burst_1.png/revision/latest/scale-to-width-down/473?cb=20210131040421" />
            <Card.Body>
              <Card.Title>Rock Burst</Card.Title>
              <Card.Text>
                Dust, rocks and ground are all combine to form the most painfull experience to any miner, with a loud scream and blow every sharp fragment is send to all directions. Simple as: avoid getting hit and tears would not be spilled.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Attacks;
