import Catergory from "../../components/category/Catergory";
import NavigationBar from "../../components/layouts/NavigationBar";
import { Container } from "react-bootstrap";
import NewFeatures from "../../components/NewFeatures/NewFeatures";

function App() {
  return (
    <Container className="home">
      <NavigationBar />
      <Catergory />
      <NewFeatures />
    </Container>
  );
}

export default App;
