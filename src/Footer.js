import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="main_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 footer_block">
              <a href="index.html">
                <img src="assets/images/footer_logo.png" alt=""/>
              </a>
              <p className="copy">
                Copyrights 2018,
                <br />
                HTML Template <br />
                all rights reserved
              </p>
            </div>
            <div className="col-md-6 col-lg-3 footer_block">
              <h6 className="footer_block_title">Apropos</h6>
              <p>
                Lorem Ipsum is simply dummy
                <br />
                text of the printing and
                <br />
                typesetting industry.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 footer_block">
              <h6 className="footer_block_title">Contactez nous</h6>
              <p>
                1600 Amphitheatre Parkway
                <br />
                Mountain View, CA 94043
                <br />
                Phone: +1 650-253-0000
              </p>
            </div>
            <div className="col-md-6 col-lg-3 footer_block">
              <div className="social_wg">
                <h6 className="footer_block_title">Socials</h6>
                <p>
                  <a href="#">
                    <i className="fab fa-twitter-square" />
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
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
