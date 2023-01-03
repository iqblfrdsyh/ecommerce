import Catergory from "../components/category/Catergory";
import NavigationBar from "../components/layouts/NavigationBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="home">
      <NavigationBar />
      <Catergory />
    </Container>

  );
}

export default App;
