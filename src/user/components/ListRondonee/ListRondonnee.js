import React, { Component } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import axios from 'axios';
import  "./listRondonne.css";


const RandoCard = (props) =>(
      <div className="Rando-card">
        <img src={props.rando.imageRando} alt="" className="rando-img"/>
        <div className="detail">
          <span className="rando-title">{props.rando.name}</span>
          <div className="sub-detail">
            <span>Type: {props.rando.select}</span>
            <span>Distination: {props.rando.selectt}</span>
          </div>
          <span className="price">Prix: {props.rando.prix} DT</span>
          <p className="parag">{props.rando.text}</p>
          <button type="submit" className="btn btn-warning" id="participer">
            Participer
          </button>
        </div>
      </div>
)
class Randonnée extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchRando: "",
      listRando: [],
    
    };
  }
  componentDidMount() {
		axios
			.get('/randos')
			.then((res) =>
				this.setState({
					listRando: res.data
        })
     
      )
      
			.catch((err) => alert('err'));
	}

  Search = elm => {
    this.setState({
      searchRando: elm.target.value
    });
  };
  render() {
    return (
      <div className="randoPage">
        <Navbar/>
        <div className="RandoContainer">
          <input
            placeholder="Chercher une randonnée ..."
            value={this.state.searchRando}
            onChange={this.Search}
            className="SearchBar"
          />
          <div className="rcontainer">
            <div className="rando-card">
              {this.state.listRando.filter(
                  el =>
                  ( el.name
                      .toLowerCase()
                      .indexOf(this.state.searchRando.toLowerCase()) && el.selectt.toLowerCase().indexOf(this.state.searchRando.toLowerCase())) !== -1
                ).map(card => (
                  <RandoCard rando={card} />
                ))}
            </div>
          </div>
        </div>
      <Footer/>
    </div>
    );
  }
}

export default Randonnée;

