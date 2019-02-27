import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './user/components/Home/home.js';
import Admin from './Admin/Admin/Admin';
import Authenticate from './user/components/authentification/Authentification.js';
import ProfilUser from './user/components/ProfilUser/ProfilUser.js';
import Contact from './user/components/Contact/Contact.js';
import Randonnee from './user/components/ListRondonee/ListRondonnee.js';
import Photos from "./user/components/Gallerie/Gallerie";
import Service from "./user/components/ServiceList/Service";
import ListUser from './user/components/authentification/ListUser.js';


const Routes = (props) =>{
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route path ="/member-space" render={() => <Authenticate onSignup={props.onSignup} />}/>
            <Route path ="/Randonnée" component={Randonnee}/>
            <Route path ="/ProfilUser" component={ProfilUser}/>
            <Route path ="/Contact" component={Contact}/>
            <Route path="/Photo" component={Photos}/>
            <Route path="/Services" component={Service}/>
            <Route path="/ListUser" render={() => <ListUser contacts={props.contacts} />}/>
        </Switch>
    </Router>);
}

export default Routes