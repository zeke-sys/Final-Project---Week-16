import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return(
        <footer>
            <Container className="footerText">
                <Row>
                    <Col className="text-right py-3">Property of Zeke Systems</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer