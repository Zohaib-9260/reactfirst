import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import g2_one from '../Components/Images/g2_one.jpg'
import g2_two from '../Components/Images/g2_two.jpg'

function Gridsecond(){
    return(
        <>
            <Container className="mt-5">
                <Row  style={{height:'600px', display:'flex',alignItems:'center'}}>
                    <Col className="col-lg-6 col-12 text-lg-end text-center">
                        <div>
                            {/* <Image src={g2_one} style={{width:'80%',marginBottom:'5px'}} className="g2-one"/> */}
                            <Image src={g2_two} style={{width:'80%'}} className="g2-two"/>
                        </div>   
                    </Col>
                    <Col className="col-lg-5 col-12 px-lg-0 px-5 mt-lg-0 mt-4 grid2-2" style={{height:'auto',borderRight:'5px solid rgb(126, 190, 29)',boxShadow:'0px 0px 15px gray'}}>
                        <div className="px-lg-4 pt-lg-5 pt-2">
                            <h4 style={{fontWeight:'700'}}>ZOHAIB STUDIO</h4> 
                            <h6>WEB, MOBILE, UI and UX</h6> 
                            <p style={{color:'gray'}}>
                            Web, mobile, UI, and UX are essential components of modern digital experiences, and many companies offer specialized services in these areas. Web development focuses on building and maintaining websites, ensuring they are responsive, secure, and user-friendly. Mobile development involves creating apps for smartphones and tablets, optimizing them for different operating systems like iOS and Android to provide seamless experiences. UI (User Interface) design is all about the visual elements of an application or website.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Gridsecond;