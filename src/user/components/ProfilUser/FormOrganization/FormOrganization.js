import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from 'axios';
import AllRandos from "../AllRandos/AllRandos";
import "./FormOrganization.css";
class FormOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select:'',
      nameRando:'',
      imageRando:'',
      PtDepart:'',
      selectt:'',
			prix: '',
      date: '',
      time:'',
      text:'',
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

	UpdateRandoList = (value) => {
		this.setState({
			listrando: value
		});
  };

 

	onAddRandoPressed = () => {
		axios
      .post('/add-Rando', { select: this.state.select,
        name: this.state.nameRando,
        imageRando: this.state.imageRando,
        PtDepart: this.state.PtDepart,
        selectt: this.state.selectt,
        prix: this.state.prix,
        date: this.state.date,
        time: this.state.time,
        text: this.state.text

       })
			.then((res) => axios.get('/randos').then((res) => this.UpdateRandoList(res.data)))
			.catch((err) => alert(err));
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};




  render() {
    return (
      <div className="">
        <Form className="formulaire">
          <FormGroup className="formulairegroupe">
            <Label className="alllabel" for="exampleSelect">
              Type de rando
            </Label>
            <Input type="select" name="select" onChange={this.onChange} id="exampleSelect" >
              <option>Selectionner</option>
              <option>Randonnée</option>
              <option>Camping</option>
              <option>Pêche</option>
              <option>Cyclisme</option>
            </Input>
          </FormGroup>

          <FormGroup className="formulairegroupe">
            <Label className="alllabel">Nom de Rando</Label>
            <Input type="text" placeholder="" name="nameRando" onChange={this.onChange} />
          </FormGroup>

          <FormGroup className="formulairegroupe">
            <Label className="alllabel">image de Rando</Label>
            <Input type="text" placeholder="" name="imageRando" onChange={this.onChange} />
          </FormGroup>

          <FormGroup className="formulairegroupe">
            <Label className="alllabel">Point de départ</Label>
            <Input type="text" placeholder="" name="PtDepart" onChange={this.onChange} />
          </FormGroup>
          <FormGroup className="formulairegroupe">
            <Label className="alllabel" for="exampleSelect">
              Déstination
            </Label>
            <Input type="select" name="selectt"  onChange={this.onChange}id="exampleSelect">
              <option>Selectionner</option>
              <option>Ariana</option>
              <option>Béja</option>
              <option>Ben Arous</option>
              <option>Bizerte</option>
              <option>Gabès</option>
              <option>Gafsa</option>
              <option>Jendouba</option>
              <option>Kairouan</option>
              <option>Kasserine</option>
              <option>Kébili</option>
              <option>Le Kef</option>
              <option>Mahdia</option>
              <option>La Manouba</option>
              <option>Médenine</option>
              <option>Monastir</option>
              <option>Nabeul</option>
              <option>Sfax</option>
              <option>Sidi Bouzid</option>
              <option>Siliana</option>
              <option>Sousse</option>
              <option>Tataouine</option>
              <option>Tozeur</option>
              <option>Tunis</option>
              <option>Zaghouan</option>
            </Input>
          </FormGroup>

          <FormGroup className="formulairegroupe">
            <Label className="alllabel">Prix</Label>
            <Input type="text" name="prix" onChange={this.onChange} />
          </FormGroup>

          <FormGroup className="formulairegroupe">
            <Label className="alllabel" for="exampleDate">
              Date
            </Label>
            <Input
              type="date"
              name="date"
              // id="exampleDate"
              placeholder="date "
            />
          </FormGroup>
          <FormGroup className="formulairegroupe">
            <Label className="alllabel" for="exampleTime">
              Temps
            </Label>
            <Input
              type="time"
              name="time"
              onChange={this.onChange}
              id="exampleTime"
              placeholder="timer"
            />
          </FormGroup>

          <FormGroup className="formulairegroupe">
            <Label className="alllabel" for="exampleText">
              Description
            </Label>
            <Input type="textarea" name="text" onChange={this.onChange} id="exampleText" />
          </FormGroup>
        </Form>

        <div className="confirm-cancel">
          <Button 	onClick={() => {
							this.onAddRandoPressed();
						}}   className="btn btn-success" outline color="success">
            Confirmer
          </Button>
          <Button className="btn btn-danger" outline color="warning">
            Annuler
          </Button>
        </div>
        
      </div>
    );
  }
}
export default FormOrganization;
