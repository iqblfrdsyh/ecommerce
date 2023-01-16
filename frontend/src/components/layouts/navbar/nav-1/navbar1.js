import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


const Nav1 = () => {
    return (
        <Navbar expand="sm" variant="dark" className="navbar1">
            <Container>
                <Navbar.Brand href="#home" className="nav-brand1">Open Sponsorship</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Cell Center</Nav.Link>
                        <Nav.Link href="#link">Help</Nav.Link>
                        <Nav.Link href="#home">Tutorial</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Be Partners</Nav.Link>
                        <Nav.Link href="#link">Open Shop</Nav.Link>
                        <NavDropdown title="Download" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="English" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Nav1