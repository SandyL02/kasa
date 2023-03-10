import StarEmpty from '../images/star_empty.png';
import StarFull from '../images/star_full.png';

const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img key={i} src={StarFull} alt="star full" />);
      } else {
        stars.push(<img key={i} src={StarEmpty} alt="star empty" />);
      }
    }
  
    return (
      <div>
        {stars}
      </div>
    );
  };
  
  export default Rating;