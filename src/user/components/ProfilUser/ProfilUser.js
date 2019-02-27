import React, { Component } from "react";
import AddSearchOraganiz from "./AddSearchOraganiz/AddSearchOraganiz";
import Footer from "../Footer/Footer";
import Nabar from "../Header/Navbar";
class  ProfilUser extends Component {
  render() {
    return (
      <div >
         <Nabar />
         <AddSearchOraganiz />
         <Footer/>
      </div>
    );
  }
}

export default ProfilUser;