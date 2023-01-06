import Catergory from "../../components/category/Catergory";
import FlashSale from "../../components/flashSale/FlashSale";
import NavigationBar from "../../components/layouts/NavigationBar";
import NewFeatures from "../../components/NewFeatures/NewFeatures";
import { Container } from "react-bootstrap";
import "./home.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="Navbar">
        <NavigationBar />
      </div>
      <div className="home">
        <Container>
          <Catergory />
          <FlashSale />
          <NewFeatures />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
