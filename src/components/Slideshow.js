import React, { useState } from "react";
import ArrowLeft from '../images/arrow-left.png';
import ArrowRight from '../images/arrow-right.png';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

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