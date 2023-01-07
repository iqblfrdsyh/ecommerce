import NavigationBar from "../../components/layouts/NavigationBar";
import NewFeatures from "../../components/NewFeatures/NewFeatures";
import { Container } from "react-bootstrap";
import "./home.css";
import React from "react";
import Catergory from "../../components/product/category/Catergory";
import FlashSale from "../../components/product/flashSale/FlashSale";
import OnlyForYou from "../../components/product/OFY/OnlyForYou";
import Payment from "../../components/Payment/Payment";

function App() {
  return (
    <div className="home">
      <NavigationBar />
      <Container>
        <Payment />
        <Catergory />
        <FlashSale />
        <NewFeatures />
        <OnlyForYou />
        <img
          style={{ maxWidth: "100%" }}
          src="assets/event/Banner.png"
          alt=""
        />
      </Container>
    </div>
  );
}

export default App;
