import { Row, Col } from "react-bootstrap";
const PaymentMethod = () => {
  const hexaImage = "/assets/footer/hexa.png";
  const circleImage = "/assets/footer/circle.png";
  const kanbaImage = "/assets/footer/kanba.png";
  const avenImage = "/assets/footer/aven.png";
  const livaImage = "/assets/footer/liva.png";
  const foxhubImage = "/assets/footer/fox-hub.png";
  const goldlineImage = "/assets/footer/goldline.png";
  const earthImage = "/assets/footer/earth2.0.png";
  const asgardiaImage = "/assets/footer/asgardia.png";

  return (
    <div className="PaymentMethod">
      <Row>
        <Col className="mb-4">
          <h4 className="fw-bold">Payment Method</h4>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex  flex-wrap justify-content-between">
          <img src={hexaImage} alt="" />
          <img src={circleImage} alt="" />
          <img src={kanbaImage} alt="" />
          <img src={avenImage} alt="" />
          <img src={livaImage} alt="" />
          <img src={foxhubImage} alt="" />
          <img src={goldlineImage} alt="" />
          <img src={earthImage} alt="" />
          <img src={asgardiaImage} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default PaymentMethod;
