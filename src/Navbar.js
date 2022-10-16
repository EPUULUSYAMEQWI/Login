import React from "react";
import "./Navbar.css"

const navbar=()=> {
  return(
    <div>
      <div className="topnav" >
        <div className="navbar">
          <a href="#home" class="active">Home</a>
          <a href="#news">About</a>
          <a href="#contact">Contact</a>
        
        </div>
       
      </div>
    </div>
  );
}
export default navbar;







