import React from "react";
import contact from '../Components/Images/contact.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Contact(){
    return(
        <>
            <div style={{
                backgroundImage: `url(${contact})`,
                width:'100%',
                height:'80vh',
                backgroundSize:'cover',
                backgroundPosition:'center',
                marginTop:'50px',
                backgroundBlendMode:'darken',
                backgroundColor:'rgba(0,0,0,0.5)'
            }}>

                <Container>
                    <Row>
                        <Col className="col-lg-4 col-12" style={{marginTop:'160px'}}>
                            <div className="bg-white p-5" style={{borderLeft:'5px solid rgb(126,190,29)',boxShadow:'0px 0px 20px black'}}>
                                <h3>Address</h3>
                                <p>123, Rama IX, Bangkok 12340, Thailand.</p>
                                <h3>Email</h3>
                                <p>zohaibriaz9260@gmail.com </p>
                                <h3>Phone</h3>
                                <p>0329-3737000</p>
                            </div>
                        </Col>
                        <Col className="col-lg-8 col-12 mt-4">
                           <div className="d-lg-flex gap-4 ps-lg-5 ps-0">
                                <input type="name" placeholder="Name" style={{borderLeft:'5px solid rgb(126,190,29)',width:'50%',height:'50px',padding:'10px',border:'none'}}></input>
                                <input type="email" placeholder="Email" style={{borderLeft:'5px solid rgb(126,190,29)',width:'50%',height:'50px',padding:'10px',border:'none'}}></input>
                           </div>
                           <div className="ps-lg-5 ps-0 mt-4">
                                <input type="name" placeholder="Subject" style={{borderLeft:'5px solid rgb(126,190,29)',width:'100%',height:'50px',padding:'10px',border:'none'}}></input>
                           </div>
                           <div className="ps-lg-5 ps-0 mt-4" >
                            <textarea placeholder="Your Message" style={{width:'100%',height:'150px',paddingLeft:'10px'}}></textarea>
                           </div>
                           <div className="ps-lg-5 ps-0 mt-3">
                            <Button variant="" style={{backgroundColor:'rgb(126,190,29)',color:'white',fontWeight:'600'}}>SHOOT MESSAGE</Button>
                           </div>
                        </Col>
                       
                    </Row>
                </Container>
            </div>
        </>
    );
}


export default Contact;