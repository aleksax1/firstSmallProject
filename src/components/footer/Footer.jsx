import React from "react";
import '../../App.scss';
import { FaInstagram } from "react-icons/fa";
import { PiGithubLogoLight } from "react-icons/fa";

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
            display:'flex',
            flexDirection:'column',

        }}>
            <a href=""><FaInstagram/></a>
            <a href=""><PiGithubLogoLight /></a>
            <a href="">ABOUT</a>
            <a href="">CONTACT</a>
        </div>
        </div>
    
      </>
    );
  }
  
  export default Footer;
  

