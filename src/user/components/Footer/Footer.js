import React from "react";
import "./Footer.css"
class Footer extends React.Component {
  render() {
    return (
      <footer className="main_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 footer_block">
            <h6 className="footer_block_title">Campi.tn</h6>
              <p >
                Copyrights 2018,
                <br />
                all rights reserved
              </p>
            </div>
            <div className="col-md-6 col-lg-3 footer_block">
              <h6 className="footer_block_title">Apropos</h6>
              <p>
                text of the printing and
                <br />
                typesetting industry.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 footer_block">
              <h6 className="footer_block_title">Contactez nous</h6>
              <p>
                Immeuble NEO 2ème étage
                <br />
                Rue du lac lochness
                <br/>
                Les Berges du Lac1
                <br />
                Numéro téléphone: +71 100 000
              </p>
            </div>
            <div className="col-md-6 col-lg-3 footer_block">
              <div className="social_wg">
                <h6 className="footer_block_title">Social Media</h6>
                <p>
                  <a href="/">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="/">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="/">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="/">
                    <i className="fab fa-instagram" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
