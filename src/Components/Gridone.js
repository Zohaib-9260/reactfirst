import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gridone(){
    return(
    <>
        <Container className="bg-white" style={{marginTop:'-50px',borderRadius:'8px'}}>
            <Row className="gy-lg-0 gy-3 px-md-0 px-3">
                <Col className="col-lg-4 col-12 p-4 gridone1" style={{border:'1px solid lightgray',borderLeft:'5px solid rgb(126, 190, 29)',borderTopLeftRadius:'8px',borderBottomLeftRadius:'8px'}}>
                <div className="d-flex align-items-center gap-3">
                    <div className="col-5" style={{height:'63px',width:'63px',border:'2px solid green',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <i class="fa-brands fa-bootstrap"style={{fontSize:'2.6rem'}}></i>
                    </div>
                    <div className="col-7">
                        <h4>Bootstrap v5.3.3</h4>
                        <p>Bootstrap is a front-end framework that provides pre-built, responsive, and mobile-first design components to streamline web development.</p>
                    </div>
                </div>
                </Col>

                <Col className="col-lg-4 col-12 p-4 gridone2" style={{border:'1px solid lightgray',borderLeft:'5px solid rgb(126, 190, 29)'}}>
                <div className="d-flex align-items-center gap-3">
                    <div className="col-4" style={{height:'60px',width:'60px',border:'2px solid green',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <i class="fa-brands fa-css3-alt" style={{fontSize:'2.6rem'}}></i>
                    </div>
                    <div className="col-8">
                        <h4>HTML5 CSS3</h4>
                        <p>HTML5 provides new semantic elements, multimedia support, and enhanced functionality, while CSS3 offers advanced styling, animations, and responsive design features.</p>
                    </div>
                </div>
                </Col>

                <Col className="col-lg-4 col-12 p-4 gridone3" style={{border:'1px solid lightgray',borderLeft:'5px solid rgb(126, 190, 29)',borderTopRightRadius:'8px',borderBottomRightRadius:'8px'}}>
                <div className="d-flex align-items-center gap-3">
                    <div className="col-4" style={{height:'60px',width:'60px',border:'2px solid green',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <i class="fa-brands fa-react" style={{fontSize:'2.6rem'}}></i>
                    </div>
                    <div className="col-8">
                        <h4>React v18.2.0</h4>
                        <p>React is a JavaScript library for building user interfaces, enabling efficient and declarative UI development using components and a virtual DOM.</p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </>
        
    );
}

export default Gridone;