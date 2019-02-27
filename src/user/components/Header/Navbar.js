import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Logo from "./logo";

class Nabar extends Component{
    render(){
        return(
            <nav className="navbar navbar-default">
            <Logo/>
             <div className="container-fluid">
             
              <ul className="nav navbar-nav">
              
                <li>
                  <Link to ="/"><a href="/">Accueil</a></Link>
                </li>
                <li>
                  <Link to ="/Randonnée"><a href="/">Randonnées</a></Link>
                </li>
                <li >
                  <Link to ="/Services"><a href="/">Services</a></Link>
                </li>
                <li>
                  <Link to ="/Photo"><a href="/">Photos</a></Link>
<<<<<<< HEAD
                </li>
                <li>
                  <Link to ="/ProfilUser"><a href="/">Devenir Oraganisateur</a></Link>
=======
>>>>>>> 0c1474019696b28ba5317ab6a212f992c4f5b10f
                </li>
                <li>
                  <Link to ="/Contact"><a href="">Contact</a></Link>
                </li>
                <li>
                  <Link to ="/member-space"><a href="">Connexion</a></Link>
                </li>
                <li>
                  <Link to ="/ListUser"><a href="">Users</a></Link>
                </li>
              </ul>
            </div>
        </nav>
        )
    }
}

export default Nabar;