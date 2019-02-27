import React,{Component} from "react";
import "./Gallerie.css";
import NavBar from "../Header/Navbar";
import Photos from "./Photos";

class Gallerie extends Component{
  render(){
    return(
      <div>
        <NavBar/>
        <Photos/>
      </div>
    )
  }
}

export default Gallerie;
