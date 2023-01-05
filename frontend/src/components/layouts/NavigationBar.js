import React from "react";
import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import "./nav.css";

const NavigationBar = () => {
  const logo = "/assets/logo/logo.png";
  const IconLokasi = "/assets/navbar/lokasi-icon.png";
  const IconLonceng = "/assets/navbar/lonceng-notif.png";
  const IconToko = "assets/navbar/toko.png";
  const IconKeranjang = "assets/navbar/keranjang.png";
  const userProfile = "/assets/navbar/profile.png";

  return (
    <div>
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

      {/* Navbar 2 */}
      <Navbar expand="lg" className="navbar2">
        <Container>
          <Navbar.Brand href="#" className="navbar-brand">
            <img src={logo} alt="" width={37} /> Zero
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="iconLokasi">
              <img src={IconLokasi} alt="" />
            </div>
            <Nav
              className="me-auto my-2 my-lg-0 nav"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title="Bandung, Indonesia"
                id="navbarScrollingDropdown"
              >
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
              <NavDropdown
                title="Category"
                id="navbarScrollingDropdown"
                className="dropdown-category"
              >
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
            <Container fluid className="profile">
              <div className="logo">
                <img src={IconLonceng} alt="" />
                <img src={IconToko} alt="" />
                <img src={IconKeranjang} alt="" />
              </div>
              <div className="user">
                <div className="profileUser">
                  <img src={userProfile} alt="" width={40} />
                  <div className="nameUser">
                    <h6>
                      Iqbal
                      <p style={{ color: "#129A00" }}>Online</p>
                    </h6>
                  </div>
                </div>
              </div>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
};

export default NavigationBar;
