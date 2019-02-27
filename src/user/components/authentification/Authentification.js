import React, { Component } from "react";
import Signup from "./SignUp";
import SignIn from "./SignIn";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import  './Authentification.css';

class Authenticate extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="LoginSignup-container">
          <Signup onSignup={this.props.onSignup} />
          <SignIn />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Authenticate;
