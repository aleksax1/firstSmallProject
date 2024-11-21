import React from "react";
import '../../App.scss';
import { FaInstagram } from "react-icons/fa";
import { PiGithubLogoLight } from "react-icons/pi";
function Footer() {
    return (
      <>
       <div className="footer" style={{
        height:"20vh",
        display:"flex",
        alignItems:"center",
        justifyContent:'space-evenly'
        
        ,gap:"15vw"
      }}>
        <h3>TESLA NEWS ®</h3>
        <div style={{
            color:"white",
            textDecoration:'none',
            display:'flex'

        }}>
          <div style={{
            display:"flex",
            alignItems:"center",
            paddingRight: 20,
          }}> 
          <h4>created by: Aleksa Jankovic</h4> 
          </div>
          <div>
          <a href="https://github.com/aleksax1" rel="_blank" ><PiGithubLogoLight style={{
            width:'50px'
            ,height:'50px'
            }}/></a>
          </div>
        </div>
        </div>
    
      </>
    );
  }
  
  export default Footer;
  

