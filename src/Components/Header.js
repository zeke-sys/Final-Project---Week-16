import React from "react";
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';

//Adding header
const Header = () => {
    return(
        <header>
            <Container className="heading">
                <NavBar />
                <h2>Music Festival Booking</h2>
            </Container>
        </header>
    )
}

export default Header