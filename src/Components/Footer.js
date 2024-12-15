import React from "react";

function Footer(){
    return(
        <>
            <div style={{backgroundColor:'#f6f6f8',height:'300px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                <p>Copyright © 2024 Zohaib Sol.</p>
                <div className="d-flex gap-3 fs-3">
                <i class="fa-brands fa-facebook fone"></i>
                <i class="fa-brands fa-instagram ftwo"></i>
                <i class="fa-brands fa-youtube fthree"></i>
                <i class="fa-brands fa-twitter ffour"></i>
                </div>
            </div>
        </>
    );
}

export default Footer;