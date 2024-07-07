import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function App() {
  return (
    <React.Fragment>
      <div className="App">
        {/*  this is navbar */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">The Best</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* this is navbar */}
        {/* this is alert */}

        <Alert variant="danger">
          <Alert.Heading>Hey, Start </Alert.Heading>
          <p>welcom</p>
          <hr />
          <p className="mb-0">hiiiiiiiiiiiiiiiiiiiii</p>
        </Alert>

        {/* this is alert */}

        {/* this is cards */}
        <div id="movies">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://th.bing.com/th/id/R.4e553267e8bce4bfd0804887486ca975?rik=f3h%2b%2fFY2Mm6WVg&riu=http%3a%2f%2fwww.themarysue.com%2fwp-content%2fuploads%2f2015%2f04%2fspider-man.jpg&ehk=rp3sX0qoTecfB0bn3ODwXhKXeCl6JKb%2brMxg59H6n4E%3d&risl=&pid=ImgRaw&r=0"
            />
            <Card.Body>
              <Card.Title>Dark 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">now</Button>
            </Card.Body>
          </Card>
          {/* this is cards */}

          {/* this is cards */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://th.bing.com/th/id/R.c6a3f05cd851610fec1987785b241632?rik=JWjiCsxBR1bBpw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f9%2ff%2f702687-most-popular-cristiano-ronaldo-hd-wallpaper-2042x3000-for-phones.jpg&ehk=S7qUBk%2bCoOcw9jidI9LL9vicAW2KSiAwjMMAA2aiU8o%3d&risl=&pid=ImgRaw&r=0"
            />
            <Card.Body>
              <Card.Title>Dark 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">now</Button>
            </Card.Body>
          </Card>
          {/* this is cards */}
          {/* this is cards */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://th.bing.com/th/id/OIP.qet4T1pC87OONSj_2fox4gHaKi?rs=1&pid=ImgDetMain"
            />
            <Card.Body>
              <Card.Title>Dark 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">now</Button>
            </Card.Body>
          </Card>
          {/* this is cards */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
