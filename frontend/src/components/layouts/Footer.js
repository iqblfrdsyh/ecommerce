import { Container } from "react-bootstrap"
import BrandCategories from "./brandCategories/brandCategories"
import PaymentMethod from "./paymentMethod/PaymentMethod"

const Footer = () => {
    return (
        <footer>
            <Container>
                <BrandCategories />
                <PaymentMethod />
            </Container>
        </footer>
    )
}

export default Footer