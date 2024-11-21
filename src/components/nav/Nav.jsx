import React from "react";
import '../../App.scss';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';function Nav({article}) {
    return (
      <>
      
       <div className="nav">
        <h1>TESLA NEWS</h1>
          </div>
      <div className="nav2" style={{
        height:"7vh",
        display:"flex",
        alignItems:"center",
        padding:"0 10vw",
        justifyContent:"space-evenly"
        }}>
        <div>HOME</div>
        <div>NEWS</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>
      </>
    );
  }
  
  export default Nav;
  

