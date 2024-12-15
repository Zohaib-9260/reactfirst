import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import grid3_one from '../Components/Images/grid3_one.jpg'
import grid3_two from '../Components/Images/grid3_two.jpg';
import grid3_three from '../Components/Images/grid3_three.jpg';
import grid3_four from '../Components/Images/grid3_four.jpg';
import grid3_five from '../Components/Images/grid3_five.jpg';
import grid3_six from '../Components/Images/grid3_six.jpg';
import grid3_seven from '../Components/Images/grid3_seven.jpg';
import grid3_eight from '../Components/Images/grid3_eight.jpg';

function Showcase(){
    return(
        <>
            <div style={{textAlign:'center',marginTop:'50px',fontWeight:'700',fontSize:'1.8rem'}}><p>OUR SHOWCASE</p></div>
            <Container>
                <Row className="gx-2">
                    <Col className=" gy-2 col-lg-4 col-12">
                        <Image src={grid3_one} style={{width:'100%'}} />
                    </Col>
                    <Col className="gy-2 col-lg-4 col-12">
                        <Image src={grid3_two} style={{width:'100%'}} />
                    </Col>
                    <Col className="gy-2 col-lg-4 col-12">
                        <Image src={grid3_three} style={{width:'100%'}} />
                    </Col>
                </Row>

                <Row className="gx-2">
                    <Col className="gy-2 col-lg-6 col-12">
                        <Image src={grid3_four} style={{width:'100%'}} />
                    </Col>
                    <Col className="gy-2 col-lg-6 col-12">
                        <Image src={grid3_five} style={{width:'100%'}} />
                    </Col>
                </Row>

                <Row className="gx-2">
                    <Col className=" gy-2 col-lg-4 col-12">
                        <Image src={grid3_six} style={{width:'100%'}} />
                    </Col>
                    <Col className="gy-2 col-lg-4 col-12">
                        <Image src={grid3_seven} style={{width:'100%'}} />
                    </Col>
                    <Col className="gy-2 col-lg-4 col-12">
                        <Image src={grid3_eight} style={{width:'100%'}} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Showcase;