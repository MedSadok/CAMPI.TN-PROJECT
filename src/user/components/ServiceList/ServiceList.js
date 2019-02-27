import React, {Component} from "react";
import "./Service.css";

class ServiceList extends Component{
    render(){
        return(
            <div className="offer">
          
          <div className="Service light_area section_padding_100_100">
            <div className="container" id="service-container">
              <div className="row">

                <div className="col-md-12 col-lg-4 single_cool_fact">
                  <div className="text-center">
                    <div className="cool_fact_icon_img">
                      <img src="images/cukl.png" alt="" className="service"/>
                    </div>
                    <div id="text">
                    <h4 class="cool_fact_name">Cyclisme</h4>
                    <p id="text-details" >
                      Lorem Ipsum is simply dummy
                      <br /> text of the printing and typesetting industry simply.
                    </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-4 single_cool_fact">
                  <div className="text-center">
                    <div className="cool_fact_icon_img">
                      <img src="images/camping.png" alt="" className="service"/>
                    </div>
                    <div id="text">
                    <h4 class="cool_fact_name">Camping</h4>
                    <p id="text-details" >
                      Lorem Ipsum is simply dummy
                      <br /> text of the printing and typesetting industry simply.
                    </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-4 single_cool_fact">
                  <div className="text-center">
                    <div className="cool_fact_icon_img">
                      <img src="images/fishing.png" alt="" className="service" />
                    </div>
                    <div id="text">
                    <h4 class="cool_fact_name">Croisiere</h4>
                    <p id="text-details" >
                      Lorem Ipsum is simply dummy
                      <br /> text of the printing and typesetting industry simply.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default ServiceList;