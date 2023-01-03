import Catergory from "../../components/category/Catergory";
import FlashSale from "../../components/flashSale/FlashSale";
import NavigationBar from "../../components/layouts/NavigationBar";
import NewFeatures from "../../components/NewFeatures/NewFeatures";
import "./home.css";

function App() {
  return (
    <div className="home">
      <NavigationBar />
      <Catergory />
      <FlashSale />
      <NewFeatures />
    </div>
  );
}

export default App;
