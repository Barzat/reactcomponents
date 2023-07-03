import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function ContainerInsideExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="https://www.youtube.com/watch?v=kVJ1I_omkuo">
          BarNav
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ContainerInsideExample;
