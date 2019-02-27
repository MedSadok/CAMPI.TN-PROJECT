import React from "react";
import "./Contact.css";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
class Contact extends React.Component {
  render() {

    return (
      <div className="contact-container">
        <Navbar/>
        <div className="contact">
          <div className="Contact-form">
            <h3 className="heading">Exprimez-vous</h3>
            <div>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Entrer votre nom"
                  className="form-control "
                />
              </div>
              <br />
              <div className="col-sm-8">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Entrer votre Email"
                  className="form-control "
                />
              </div>
              <br />
              <div className="col-sm-8">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Entrer votre sujet"
                  className="form-control "
                />
              </div>
              <br/>
              <div className="col-sm-12">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="A quoi pensez-vous ..."></textarea>
              </div>
            </div>
            <div className="col-sm-12" id="reset-submit">
              <button class="btn btn-warning" type="reset" value="Reset" >
                Reset
              </button>
              <button type="submit" className="btn btn-success" value="Submit" id="submit">
                Submit
              </button>
            </div>
          </div>
          <div className="Contact-info">
            <h3 className="heading">Contactez-nous</h3>
            <div className="info">
              <h4>Numéro téléphone:</h4>
              <p id="info">+71 100 000</p>
            </div>
            <div className="info">
              <h4>Email:</h4>
              <p id="info">contact@campi.tn</p>
            </div>
            <div className="info">
              <h4>Adresse:</h4>
              <p id="info" >Immeuble NEO 2ème étage<br/> Rue du lac lochness<br/>Les Berges du Lac1</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
);
}
}

export default Contact;