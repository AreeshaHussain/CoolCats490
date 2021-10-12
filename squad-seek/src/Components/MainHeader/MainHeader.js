import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header>
      <Navbar bg="info" variant="light">
        <Navbar.Brand pl-5>Squad Seek</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Welcome">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/groups">
            Groups
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default MainHeader;
