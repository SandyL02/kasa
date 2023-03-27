import StarEmpty from '../images/star_empty.png';
import StarFull from '../images/star_full.png';


// boucle qui ajoute une star full en fonction de la note rating du fichier json, dès qu'elle correspond à la note, continue de mettre des star empty jusqu'à avoir 5 étoiles au total
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
    <div className="stars">
      {stars}
    </div>
  );
};

export default Rating;