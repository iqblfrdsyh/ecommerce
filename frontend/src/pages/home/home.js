import { Fragment } from "react";
import Catergory from "../../components/category/Catergory";
import FlashSale from "../../components/flashSale/FlashSale";
import NavigationBar from "../../components/layouts/NavigationBar";
import NewFeatures from "../../components/NewFeatures/NewFeatures";
import "./home.css";

function App() {
  return (
    <Fragment>
      <div className="nsavbar">
        <NavigationBar />
      </div>
      <div className="home">
        <Catergory />
        <FlashSale />
        <NewFeatures />
      </div>
    </Fragment>
  );
}

export default App;
