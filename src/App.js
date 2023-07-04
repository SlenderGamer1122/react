
import {Card, Button, Container, Form, Nav, NavDropdown, Navbar,Carousel, Col, Row } from 'react-bootstrap';
import './App.css';
let name = "Adam";

function App() {
  return (
    <div className="App">
      <div className='div1'>
        <Navbar bg="danger" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container className='nav' fluid>
        <Navbar.Brand href="#">Welcome !</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Twitter</NavDropdown.Item>
              <NavDropdown.Item href="#action4">E-mail</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Facebook</NavDropdown.Item>
                
              
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Social media
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='btn1'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar></div><br></br>
    <h1 className='h'>Steam</h1><br></br>
      <h1 className='h'>Hello {name} Explore our latest games</h1>

      <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/M/MV5BYjk0YzQ0MzQtMWU1Yy00NGExLTlkMzctYTY2NmE3N2I0MDNmXkEyXkFqcGdeQW1haXdlbm4@._V1_.jpg"
          alt="Forza Horizon 5"
        />
        <Carousel.Caption>
          <h3>Forza Horizon 5</h3>
          <p>Enter the world of ultimate racing.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/ss_b65236b365315ebb6da6114ce42cd74b59cab3c8.1920x1080.jpg?t=1683059745"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>More Cars.</h3>
          <p>enjoy the explicit rides and infinite amount of customization.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prodforza.blob.core.windows.net/strapi-uploads/assets/large_FH_5_Ferrari_group_03_16x9_b4b858ac4f.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Play online</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      
      <div>
        <br></br>
        <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="https://www.zastavki.com/pictures/1920x1200/2010/Games_Call_of_Duty_Black_Ops_022239_.jpg" />
            <Card.Body>
              <Card.Title>Call of duty Black ops</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                .
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='h' >Email address</Form.Label>
        <Form.Control className="mb-1" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='h'>Password</Form.Label>
        <Form.Control className="mb-1" type="password" placeholder="Password" />
      </Form.Group>
      <Button className='btn'>Log in</Button>
    </Form>
      </div>
    </div>
    
  );
}

export default App;
