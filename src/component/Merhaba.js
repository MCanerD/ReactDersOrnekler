import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Merhaba() {
  const [sayac, setSayac] = useState(0);
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={5}>Merhaba</Col>
          <Col xs={4}>Hello</Col>
          <Col xs={3}>Üçüncü</Col>
        </Row>
      </Container>
      <p>Sayaç: {sayac}</p>
      <Button variant="success" onClick={() => setSayac(sayac + 1)}>
        +1
      </Button>
      <Button variant="danger" onClick={() => setSayac(sayac - 1)}>
        -1
      </Button>
    </div>
  );
}

export default Merhaba;
