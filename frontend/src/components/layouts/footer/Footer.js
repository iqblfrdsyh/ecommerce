import { Container, Col, Row } from "react-bootstrap";
import BrandCategories from "./brandCategories/brandCategories";
import PaymentMethod from "./paymentMethod/PaymentMethod";
import ZsAojs from "./ZS & AOJS/ZS-AOJS";

const Footer = () => {
  return (
    <footer>
      <Container>
        <BrandCategories />
        <PaymentMethod />
        <ZsAojs />
        <div className="footer d-flex justify-content-between">
          <Row>
            <Col>
              <p>Zero © 2022-2023, All Rights Reserved</p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex privacy">
              <p>
                <a href="">Privacy Policy</a>
              </p>
              <p>
                <a href="">Terms Of Use</a>
              </p>
              <p>
                <a href="">FAQ</a>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
