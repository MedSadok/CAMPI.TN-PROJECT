import React from "react";
import { Link } from 'react-router-dom';
import "./AllRandos.css";
function AllRandos ({rando}) {

  return (
    <div className="">
      <div className="liste-rando">
        <Link to="/Randonnée">{rando.name}</Link>
        <div>
          <button className="btn btn-secondary ">Modifier</button>
          <button className="btn btn-warning ">Supprimer</button>
        </div>
      </div>
    </div>
  );
};


export default  AllRandos;
