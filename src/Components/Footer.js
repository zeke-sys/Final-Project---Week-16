import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//adding footer
const Footer = () => {
    return(
        <footer>
            <Container className="footerText">
                <Row>
                    <Col className="text-center py-3">Property of Zeke Systems</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer