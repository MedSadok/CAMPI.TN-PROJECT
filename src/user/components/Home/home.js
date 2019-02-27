import React, { Component } from "react";
import Header from '../Header/Header';
// import ServiceList from "../ServiceList/ServiceList";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import Team from './Team';
import HomeGallery from "./HomeGallery";


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <h1 id="title">Nos Services</h1>
        <ServiceList /> */}
        <div>
          <h1 id="title">Nos Services</h1>
          <Team/>
        </div>
        <div className="ourPhoto">
          <h1 id="title">Nos Photos</h1>
          <HomeGallery/>
        </div>
        <Newsletter />
        <Footer />
    </div>
    );
  }
}

export default Home;
