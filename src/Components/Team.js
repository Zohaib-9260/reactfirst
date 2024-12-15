import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Team(){
    return(
        <>
            <Container >
                <Row className="text-center " style={{marginTop:'-30px'}}>
                    <Col className="col-lg-2 d-lg-block d-none">
                    </Col>
                    <Col className="col-lg-5 col-12 ms-lg-5 ms-0 p-5 t-1" style={{border:'1px solid lightgray',borderRight:'6px solid rgb(126,190,29)'}}>
                        <h4>MUHAMMAD ZOHAIB RIAZ</h4>
                        <h6>I am CEO & Founder</h6>
                        A passionate CEO leads with vision and dedication, inspiring the team to achieve excellence and drive the company's success.
                    </Col>
                </Row>

                <Row className="text-center mt-4" >
                    <Col className="col-lg-6 col-12 p-5 t-2" style={{border:'1px solid lightgray',borderRight:'6px solid rgb(126,190,29)'}}>
                        <h4>Jonny Ive</h4>
                        <h6>I am Director</h6>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.                    </Col>
                    <Col className="col-lg-5 ms-lg-5 ms-0 col-12 p-5 mt-lg-0 mt-4 t-3" style={{border:'1px solid lightgray',borderRight:'6px solid rgb(126,190,29)'}}>
                        <h4>Jonny Mark</h4>
                        <h6>I am UX Designer</h6>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.                    </Col>
                </Row>

                <Row className="text-center">
                    <Col className="col-lg-2 d-lg-block d-none">
                    </Col>
                    <Col className="col-lg-5 col-12 ms-lg-5 ms-0 t-4 p-5 mt-4" style={{border:'1px solid lightgray',borderRight:'6px solid rgb(126,190,29)'}}>
                        <h4>Jonny Lady</h4>
                        <h6>I am Marketing</h6>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default Team;