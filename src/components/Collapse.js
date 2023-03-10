import React, { useState } from 'react';
import ArrowUp from "../images/arrow_up.png";
import ArrowDown from "../images/arrow_down.png";

export default function Collapse({ about }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const url = window.location.href;

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
        </div>
      )}
    </div>
  );
}

