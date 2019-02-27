import React, { Component } from "react";
import axios from 'axios';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
      fname: '',
      lname:'',
      email: '',
      psw:'',
      phone :'',
			contacts: []
		};
	}

  componentDidMount() {
		axios
			.get('/contacts')
			.then((res) =>
				this.setState({
					contacts: res.data
				})
			)
			.catch((err) => alert(err));
	}

	UpdateContactList = (value) => {
		this.setState({
			contacts: value
		});
	};
	onAddContactPressed = () => {
		axios
			.post('/add-Contact', { fname: this.state.fname,lname: this.state.lname,email: this.state.email, psw: this.state.psw, phone: this.state.phone  })
      .then((res) => axios.get('/contacts'))
      .then(res => res.data)
      .then((res) => {
        this.UpdateContactList(res)
        return res
      })
      .then(res => {
        this.props.onSignup(res)
        return res
      })
			.catch((err) => alert(err));
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};


  render() {
    return (
      <div className="SignUp">
        <h3 className="heading">Créer un nouveau compte</h3>
        <div>
          <div className="col-sm-8">
            <input
              type="text"
              name="fname"
              onChange={this.onChange}
              placeholder="Entrer votre prènom"
              className="form-control "
            />
          </div>
          <br />
          <div className="col-sm-8">
            <input
              type="text"
              name="lname"
              onChange={this.onChange}
              placeholder="Entrer votre nom de famille"
              className="form-control "
            />
          </div>
          <br />
          <div className="col-sm-8">
            <input
              type="email"
              name="email"
              onChange={this.onChange}
              placeholder="Entrer votre Email"
              className="form-control "
            />
          </div>
          <br />
          <div className="col-sm-8">
            <input
              type="password"
              name="psw"
              onChange={this.onChange}
              placeholder="Entrer votre mot de passe"
              className="form-control "
            />
          </div>
          <br />
          <div className="col-sm-8">
            <input
              type="tel"
              name="phone"
              onChange={this.onChange}
              pattern="[2-9]{2}-[0-9]{3}-[0-9]{3}"
              placeholder="Entrer votre numéro de téléphone"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-sm-8" id="checkCondition">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked">
              &nbsp; j'accepte les termes et conditions
            </label>
          </div>
          <button onClick={() => {
							this.onAddContactPressed();
						}} className="btn btn-warning">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
