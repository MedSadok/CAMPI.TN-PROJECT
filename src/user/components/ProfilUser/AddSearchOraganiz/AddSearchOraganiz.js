import React from "react";
import Profil from "../Profil/Profil";
import FormOrganization from "../FormOrganization/FormOrganization";
import SearchRando from "../SearchRando/SearchRando";
import "./AddSearchOraganiz.css";

function AddSearchOraganiz() {
  return (
    <div className="App">
      <div className="container">
        <ul className="nav nav-tabs navv">
          <li className="active">
            <a data-toggle="tab" href="#home">
              organiser une Rando
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#menu1">
              Mes randos
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="home" className="tab-pane fade in active">
            <div className="profilformorganiz">
              <Profil />
              <div className="formorganiz">
                <FormOrganization />
              </div>
            </div>
          </div>
          <div id="menu1" className="tab-pane fade ">
            <div className="espace-membre">
              <div className="membre">
                <Profil />
                <SearchRando />
              </div>
            </div>
            );
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddSearchOraganiz;
