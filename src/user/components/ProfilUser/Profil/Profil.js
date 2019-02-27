import React from "react";
import "./Profil.css";
function Profil() {
  return (
    <div className="info-personnel">
      <div className="imgPreview">
        <div className="previewText" />
      </div>
      <h3 className="photoprofil">photo de profile</h3>
      <div className="information">
        <a href="/">Modifier Profile</a>
        <a href="/">Message</a>
        <a href="/">Devenir Organisateur</a>
        <a href="/">Deconnecter</a>
      </div>
    </div>
  );
}
export default Profil;
