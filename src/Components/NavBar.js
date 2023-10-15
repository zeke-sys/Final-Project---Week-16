import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

export default class NavBar extends React.Component{
    render(){
        return(
            <Navbar className='navbar' variant='dark' expand='lg'>  
             <Container>     
                    <Navbar.Brand href="#home">Music Festivals</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer className="link" to='/Home'>
                        <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer className="link" to='/Create'>
                        <Nav.Link>Add Festival</Nav.Link>
                        </LinkContainer>

                        <LinkContainer className="link" to='/Read'>
                        <Nav.Link>Update Festival</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer className="link" to='/Read'>
                        <Nav.Link>Explore</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="About" id="basic-nav-dropdown">
                        <LinkContainer className="link" to='/Sessions'>
                        <NavDropdown.Item id="drop-item">Sessions</NavDropdown.Item>
                        </LinkContainer>


                        <NavDropdown.Item href="#inactive">Artists - tbd</NavDropdown.Item>
                        
                        
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse> 
              </Container>         
            </Navbar>      
            
        );    
    }
}