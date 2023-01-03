
import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import './nav.css'
const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Zero</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Indonesia Bandung" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex form">
                        <Form.Control
                            type="search"
                            placeholder="Search in Slabshop"
                            className="me-2 search"
                            aria-label="Search"
                        />
                        <NavDropdown title="Category" id="navbarScrollingDropdown" className="dropdown-category">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar