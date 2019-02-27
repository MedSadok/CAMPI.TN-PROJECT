import React, { Component } from "react";

class SignIn extends Component {
  render(){
    return(
      <div className="SignIn">
        <h3 className="heading">J'ai déja un compte</h3>
        
        <div classNameName="form-container">
          <div className="col-sm-8">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Entrer votre Email"
              className="form-control "/>
          </div>
          <div className="col-sm-8">
            <input
              type="password"
              name="psw"
              id="psw"
              placeholder="Entrer votre mot de passe"
              className="form-control " />
          </div>
        </div>
        <div className="col-sm-8">
          <button type="submit" className="btn btn-success" >
            Se Connecter
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
