import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Navbar ,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/create">
            FORM - EMS
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
            <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header className="bg-primary text-white text-center">
              <h2>About ABC Logistics</h2>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-justify">
                ABC Logistics is one of the leading logistics companies, known for its reliable and efficient services in transportation and supply chain management. 
                Our mission is to provide top-notch logistics solutions to our clients, ensuring their goods are transported safely and on time.
              </Card.Text>
              <Card.Text className="text-justify">
                We offer a comprehensive range of services, including Full Truck Load Services, air and sea freight, warehousing, and distribution. 
                With our dedicated team of professionals and state-of-the-art technology, we strive to exceed customer expectations and deliver excellence in every aspect of our operations.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted text-center">
              Delivering Excellence, One Shipment at a Time
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default About;
