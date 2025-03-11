import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Gestor de Casilleros</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/historial">Historial</Nav.Link>
                    <Nav.Link as={Link} to="/casillero">Casillero</Nav.Link>
                    <Nav.Link as={Link} to="/login">Mi Cuenta</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
