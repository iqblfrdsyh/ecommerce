import React from "react";
import { Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import "./nav.css";

const NavigationBar = () => {
  const logo = "/assets/logo/logo.png";
  const IconLokasi = "/assets/navbar/lokasi-icon.png";
  const IconLonceng = "/assets/navbar/lonceng-notif.png";
  const IconToko = "assets/navbar/toko.png";
  const IconKeranjang = "assets/navbar/keranjang.png";
  const userProfile = "/assets/navbar/profile.png";

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="#" className="navbar-brand">
        <img src={logo} alt="" width={37} /> Zero
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 nav"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <div className="iconLokasi">
            <img src={IconLokasi} alt="" />
          </div>
          <NavDropdown title="Bandung, Indonesia" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
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
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Form>
        <div className="profile">
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
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
