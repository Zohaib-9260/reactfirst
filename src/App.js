import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainnav from './Components/Mainnav';
import hero_image from "./Components/Images/hero_image.jpg";
import Gridone from './Components/Gridone';
import Gridsecond from './Components/Gridsecond';
import Designbars from './Components/Designbars';
import Ourfunc from './Components/Ourfunc';
import crew from './Components/Images/crew.jpg';
import Team from './Components/Team';
import Showcase from './Components/Showcase';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
 

function App() {
  return (
    <>
      <Mainnav />
     

        <div style={{
          backgroundImage:`url(${hero_image})`,
          backgroundSize:'cover',
          backgroundPosition:'center',
          width:'100%',
          height:'80vh',
          backgroundBlendMode:'darken',
          backgroundColor:'rgba(0,0,0,0.8)',
        
        }}>
        
          <div style={{width:'100%',alignItems:'center',height:'70vh',color:'white',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <h2>Zohaib <span style={{color:'khaki', fontWeight:'800'}}>Sol.</span></h2>
            <h3><span style={{color:'#DA7422',fontWeight:'800'}}>WEB</span> DEVELOPMENT</h3>
            <button className='hero-btn' style={{width:'150px',textAlign:'center',padding:'10px 20px',border:'none',fontWeight:'600',borderRadius:'10px'}}>GET STARTED</button>
          </div>
        </div>
      

      <Gridone />
      <Gridsecond />
      <Designbars />
      <Ourfunc />

        {/* crew */}

      <div style={{
         backgroundImage: `url(${crew})`,
         width:'100%',
         height:'50vh',
         backgroundSize:'cover',
         backgroundPosition:'center',
         backgroundBlendMode:'darken',
         backgroundColor:'rgba(0,0,0,0.7)',
         marginTop:'40px',  
        }}>

          <div style={{width:'100%',alignItems:'center',height:'60vh',color:'white',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <h1 style={{fontWeight:'800',color:'rgb(126,190,29)'}}>MEET THE <span style={{color:'dodgerblue'}}>CREW</span></h1>
          </div>

      </div>

      <Team />
      <Showcase />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
