import React from "react";
import Navbar from "../Header/Navbar";
import ServiceList from "./ServiceList";
import Footer from "../Footer/Footer";
import "./Service.css";
class Service extends React.Component {
  render() {
    return (
      <div>
      <div className="service-container">
        <Navbar/>
        <h1 className="header-title">
          <h1>nous vous offrons la possibilité de profiter de ce que vous aimez avec des personnes partageant le même esprit d'aventure que vous.</h1>
        </h1>
        <ServiceList/>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Service;
