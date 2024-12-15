import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from "../Components/Images/logo.png";
// now for offcanvas for small small screen(below 3 imports)
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import bird from '../Components/Images/bird.jpg'


function Mainnav() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
    <>
        <Navbar bg="white border" data-bs-theme="light" style={{position:'sticky',top:'0',zIndex:'1'}}>
            <Container fluid>
            <Image src={logo} style={{width:'170px',marginLeft:'20px'}} />
            <Nav className="d-flex gap-3 links d-md-flex d-none me-4">
                
                <a href="#">HOME</a>
                <a href="#">ABOUT US</a>
                <a href="#">SERVICECS</a>
                <a href="#">TEAM</a>
                <a href="#">PORTFOLIO</a>
                <a href="#">PRICE</a>
                <a href="#">CONTACT</a>
                
            </Nav>
            </Container>
            
            {/* offcanvas */}

            <div className="d-md-none d-block" onClick={handleShow}>
                <i class="fa-solid fa-bars me-3" style={{fontSize:'2rem'}}></i>
            </div>
            
            <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Navbar Items</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="d-flex flex-column links">
                <a href="#">HOME</a>
                <a href="#">ABOUT US</a>
                <a href="#">SERVICECS</a>
                <a href="#">TEAM</a>
                <a href="#">PORTFOLIO</a>
                <a href="#">PRICE</a>
                <a href="#">CONTACT</a>
                </div>
            </Offcanvas.Body>
            </Offcanvas>

        </Navbar>  
        
    </>
    );
}

export default Mainnav;