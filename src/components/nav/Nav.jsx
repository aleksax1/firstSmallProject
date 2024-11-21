import React from "react";
import '../../App.scss';

function Nav({article}) {
    return (
      <>
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
        <div>CONSTACT</div>
      </div>
       <div className="nav">
        <h1>TESLA NEWS</h1>
          </div>
      </>
    );
  }
  
  export default Nav;
  

