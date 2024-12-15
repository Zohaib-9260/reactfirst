import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';



function Designbars(){
    return (
        <>
            <Container className="border" style={{marginTop:'60px'}}>
                <Row>
                    <Col className="col-lg-6 col-12 p-3 bars" style={{borderLeft:'5px solid rgb(126, 190, 29)'}}>
                        <h3 style={{fontWeight:'700'}}>PROFESSIONAL DESIGN</h3>
                        <p>
                        Professional design focuses on creating visually appealing and functional solutions tailored to meet user needs. It involves a deep understanding of design principles, aesthetics, and user experience. 
                        A well-executed professional design enhances brand identity, ensuring that every element serves a purpose. It combines creativity and practicality to deliver designs that are not only beautiful but also user-friendly and effective.
                        </p>
                    </Col>

                    <Col className="col-lg-6 col-12" style={{borderRight:'5px solid rgb(126, 190, 29)',borderTop:'3px solid silver'}}>
                        <div className="mt-3">
                            <div className="d-flex justify-content-between"><h6>HTML5 & CSS3</h6><h6>100%</h6></div>
                            <ProgressBar striped variant="success" now={100} />
                            <div className="d-flex justify-content-between"><h6>BOOTSTRAP</h6><h6>90%</h6></div>
                            <ProgressBar striped variant="info" now={90} />
                            <div className="d-flex justify-content-between"><h6>UX DESIGN</h6><h6>85%</h6></div>
                            <ProgressBar striped variant="warning" now={85} />
                            <div className="d-flex justify-content-between"><h6>WORDPRESS</h6><h6>75%</h6></div>
                            <ProgressBar striped variant="danger" now={75} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Designbars;