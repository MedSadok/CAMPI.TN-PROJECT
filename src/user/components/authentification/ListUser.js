import React, { Component } from 'react';
import ContactItem from "./ContactItem";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import "./Authentification.css";

class ListUser extends Component {

    render = (props) =>
    <div className="listpage">

    <Navbar/>
     <div className="liste-contact">{this.props.contacts.map((el, i) =><ContactItem key={i} contact={el}/>)}</div>
    <Footer/>
    
     </div>;
}

export default ListUser;
