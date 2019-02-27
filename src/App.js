import React, { Component } from "react";
import Routes from './Routes'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
  }
  render() {
    return (
      <div className="App">

        <Routes onSignup={(res) => {
          this.setState({
            contacts: res
          })
        }}
        contacts={this.state.contacts} /> 
      
      </div>
    
    );
  }
}

export default App;
