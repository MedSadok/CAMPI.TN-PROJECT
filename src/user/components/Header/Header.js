import React, { Component } from 'react';
import Navbar from "./Navbar";
import Slider from "./Slider";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Slider/>
      </div>
    );
  }
}


export default Header;
