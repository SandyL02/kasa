import React, { useState } from 'react';
import ArrowUp from "../images/arrow_up.png";
import ArrowDown from "../images/arrow_down.png";

export default function Collapse({ about }) {

  //par défaut le composant Collapse est fermé grâce à "false"
  const [isOpen, setIsOpen] = useState(false);

  //servira à inverser la valeur du useState quand appellé au clic sur collapse-title
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const url = window.location.href;

  //comme ce composant est utilisé à deux endroits différents, change la classe de ce composant en fonction de l'url pour permettre des règles css différentes
  const className = url.includes("about") ? "collapse-about" : url.includes("housing") ? "collapse-housing" : "";


  return (
    <div className={className}>
      <div className="collapse-title" onClick={toggle}>
        <h2>{about.title}</h2>
        <img src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
      </div>
      {isOpen && (
        <div className="collapse-text">
          {about.list === true ? <ul>{about.text.map((item) => <li key={item}>{item}</li>)}</ul> : <p>{about.text}</p>} 
          {/* lignes 38-39 de Housing, les listes sont définies en true ou false, si la valeur est true, alors le texte sera un .map de la liste équipement contenu dans des ul et li*/}
        </div>
      )}
    </div>
  );
}

