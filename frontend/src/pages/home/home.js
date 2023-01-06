import NavigationBar from "../../components/layouts/NavigationBar";
import NewFeatures from "../../components/NewFeatures/NewFeatures";
import { Container } from "react-bootstrap";
import "./home.css";
import React from "react";
import Catergory from "../../components/product/category/Catergory";
import FlashSale from "../../components/product/flashSale/FlashSale";
import OnlyForYou from "../../components/product/OFY/OnlyForYou";

function App() {
  return (
    <div className="home">
      <NavigationBar />
      <Container>
        <Catergory />
        <FlashSale />
        <NewFeatures />
        <OnlyForYou />
        <img
          style={{ maxWidth: "1100px", margin: "30px 50px" }}
          src="assets/event/Banner.png"
          alt=""
        />
      </Container>
    </div>
  );
}

export default App;
