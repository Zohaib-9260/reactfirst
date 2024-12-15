import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Ourfunc(){
    return(
        <>
            <div style={{textAlign:'center',marginTop:'50px',fontWeight:'700',fontSize:'1.8rem'}}><p>OUR FUNCTIONS</p></div>
            <Container className="text-center mt-5">
                <Row className="mt-5 gy-5">
                    <Col className="col-lg-4 col-12">
                        <i class="fa-brands fa-telegram" style={{fontSize:'4rem'}}></i>
                        <h5>RESEARCH</h5>
                    </Col>
                    <Col className="col-lg-4 col-12">
                        <i class="fa-solid fa-link" style={{fontSize:'3.5rem'}}></i>
                        <h5>PROTOTYPE</h5>
                    </Col>
                    <Col className="col-lg-4 col-12">
                        <i class="fa-regular fa-bell" style={{fontSize:'3.5rem'}}></i>
                        <h5>DESIGN</h5>
                    </Col>
                </Row>
                <Row className="mt-2 gy-5">
                    <Col className="col-lg-4 col-12">
                        <i class="fa-solid fa-mug-hot" style={{fontSize:'4rem'}}></i>
                        <h5>CODING</h5>
                    </Col>
                    <Col className="col-lg-4 col-12">
                        <i class="fa-solid fa-rocket" style={{fontSize:'3.5rem'}}></i>
                        <h5>LAUNCH</h5>
                    </Col>
                    <Col className="col-lg-4 col-12">
                        <i class="fa-solid fa-globe" style={{fontSize:'3.2rem'}}></i>
                        <h5>SOCIAL MEDIA</h5>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Ourfunc;