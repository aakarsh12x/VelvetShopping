import React from "react";
import "./navbar.css";  // Link to the compiled CSS file

class Navbar extends React.Component {
  state = {};

  render() {
    return (
      <header class="header">
      <h1 class="logo"><a href="#">VelvetCart</a></h1>
        <ul class="main-nav">
            <li><a href="#">Your Gateway to Cutting-Edge Tech Solutions!"
</a></li>
           
        </ul>
    </header> 
  
    );
  }
}

export default Navbar;
