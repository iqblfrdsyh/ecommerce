import NavigationBar from "../../components/layouts/NavigationBar";
import Footer from "../../components/layouts/Footer";
import NewFeatures from "../../components/NewFeatures/NewFeatures";
import { Container } from "react-bootstrap";
import "./home.css";
import React from "react";
import Category from "../../components/category/Catergory"
import FlashSale from "../../components/product/flashSale/FlashSale";
import OnlyForYou from "../../components/product/OFY/OnlyForYou";
import Payment from "../../components/Payment/Payment";

function App() {
  return (
    <div className="home">
      <NavigationBar />
      <Container>
        <Payment />
        <Category />
        <FlashSale />
        <NewFeatures />
        <OnlyForYou />
        <img
          style={{ maxWidth: "100%" }}
          src="assets/event/Banner.png"
          alt=""
        />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
