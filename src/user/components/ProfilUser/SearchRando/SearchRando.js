import React, { Component } from "react";
import AllRandos from "../AllRandos/AllRandos";
import "./SearchRando.css";
import ListeRando  from "../AllRandos/AllRandos";
import axios from 'axios';

class SearchRando extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchrando: "",
      Rando: [],
      listrando: []
    };
  }
  componentDidMount() {
		axios
			.get('/randos')
			.then((res) =>
				this.setState({
					listrando: res.data
        })
       
      )
      
			.catch((err) => alert('err'));
  }

  SearchRandonnee = el => {
    this.setState({
      searchrando: el.target.value
    });
  };
  render() {
    return (
      <div>
        <div>
          <div className="rando">
            <form className="example formm" action="">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                value={this.state.searchrando}
                onChange={this.SearchRandonnee}
              />
              <button type="submit">
                <i className="fa fa-search "> </i>
              </button>
            </form>
            <div className="allRando">
            
              {this.state.listrando.filter(
                el =>
                  el.name
                    .toLowerCase()
                    .indexOf(this.state.searchrando.toLowerCase()) !== -1
              ). map(card => (
                <AllRandos  rando={card} />
              ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchRando;
