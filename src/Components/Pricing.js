import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Pricing(){
    return (
        <>
            <div style={{textAlign:'center',marginTop:'50px',fontWeight:'700',fontSize:'1.9rem'}}><p>OUR PRICING</p></div>
            <Container className="mt-5">
                <Row>
                    <Col className="col-lg-4 col-12 ">
                        <div className="border p-4" style={{boxShadow:'0px 0px 10px gray'}}>
                            <h4 >BASIC PLAN</h4>
                            <div style={{border:'1px solid rgb(126,190,29)',borderRadius:'10px',marginTop:'30px'}}></div>
                            <div style={{fontWeight:'600'}}>
                                <p style={{paddingTop:'30px'}}> $35 per month</p>
                                <p>1,500 GB Storage</p>
                                <p>30 Basic Themes</p>
                                <p>2-day Response</p>
                            </div>
                            <Button variant="px-4 mt-3" style={{backgroundColor:'rgb(126,190,29)',color:'white',fontWeight:'600'}}>SIGN UP</Button>
                        </div>
                    </Col>
                    <Col className="col-lg-4 col-12">
                        <div className="border p-4" style={{boxShadow:'0px 0px 10px gray'}}>
                            <h4>BUSINESS PLAN</h4>
                            <div style={{border:'1px solid rgb(126,190,29)',borderRadius:'10px',marginTop:'30px'}}></div>
                            <div style={{fontWeight:'600'}}>
                                <p style={{paddingTop:'30px'}}>$75 per month</p>
                                <p>4,000 GB Storage</p>
                                <p>100 Business Themes</p>
                                <p>12-hr response</p>
                            </div>
                            <Button variant="px-4 mt-3" style={{backgroundColor:'rgb(126,190,29)',color:'white',fontWeight:'600'}}>SIGN UP</Button>
                        </div>
                    </Col>
                    <Col className="col-lg-4 col-12 ">
                        <div className="border p-4" style={{boxShadow:'0px 0px 10px gray'}}>
                            <h4>PREMIUM PLAN</h4>
                            <div style={{border:'1px solid rgb(126,190,29)',borderRadius:'10px',marginTop:'30px'}}></div>
                            <div style={{fontWeight:'600'}}>
                                <p style={{paddingTop:'30px'}}> $115 per month</p>
                                <p>10,000 GB Storage</p>
                                <p>150 Premium Themes</p>
                                <p>15-minute response</p>
                            </div>
                            <Button variant="px-4 mt-3" style={{backgroundColor:'rgb(126,190,29)',color:'white',fontWeight:'600'}}>SIGN UP</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Pricing;