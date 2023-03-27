import React, { useState } from "react";
import ArrowLeft from '../images/arrow-left.png';
import ArrowRight from '../images/arrow-right.png';

const Slideshow = ({ pictures }) => {

  //crée une variable "currentIndex" initialisée à 0 et une fonction "setCurrentIndex" qui permet de changer la valeur de "currentIndex"
  const [currentIndex, setCurrentIndex] = useState(0);

  //fonction permettant de définir la photo précédente comme photo affichée, si la photo déjà affichée est la première, alors elle affichera la dernière photo de la liste
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  //fonction permettant de définir la photo suivante comme photo affichée, si la photo déjà affichée est la dernière, alors elle affichera la première photo de la liste
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-img" />
      {pictures.length > 1 && ( 
        <div>
          <img src={ArrowLeft} className="prev" onClick={handlePrevClick} alt="Previous" />
          <span className="index">{`${currentIndex + 1}/${pictures.length}`}</span>
          <img src={ArrowRight} className="next" onClick={handleNextClick} alt="Next" />
        </div>

      )}
    </div>

  );
};

export default Slideshow;