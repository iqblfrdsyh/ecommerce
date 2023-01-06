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
      </Container>
    </div>
  );
}

export default App;
