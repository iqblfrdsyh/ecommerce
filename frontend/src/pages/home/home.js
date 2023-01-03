import Catergory from "../../components/category/Catergory";
import NavigationBar from "../../components/layouts/NavigationBar";
import NewFeatures from "../../components/NewFeatures/choice/NewFeatures";
import "./home.css";

function App() {
  return (
    <div className="home">
      <NavigationBar />
      <Catergory />
      <NewFeatures />
    </div>
  );
}

export default App;
